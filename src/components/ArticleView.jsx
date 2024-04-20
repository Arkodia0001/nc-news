import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { fetchArticle } from "./api";
import Loading from "./Loading";
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";
import { increaseArticleVotes, decreaseArticleVotes } from "./api";
import ErrorPage from "./ErrorPage"
import Button from '@mui/material/Button';

const ArticleView = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(0)
    const [err, setErr] = useState(null)

    const event = new Date(article.created_at)
    const date = event.toDateString()

    useEffect(() => {
        fetchArticle(article_id).then((articleFromApi) => {
            setArticle(articleFromApi[0])
            setVotes(articleFromApi[0].votes)
            setIsLoading(false)
        })
            .catch((error) => {
                setErr({ error })
            });
    }, [article_id]);

    const upVote = (article_id) => {
        setVotes((currVotes) => currVotes + 1)
        setErr(null)
        increaseArticleVotes(article_id).catch((err) => {
            setVotes((currVotes) => currVotes - 1)
            setErr("Something went wrong! Please try again.")
        })
    }

    const downVote = (article_id) => {
        setVotes((currVotes) => currVotes - 1)
        setErr(null)
        decreaseArticleVotes(article_id).catch((err) => {
            setVotes((currVotes) => currVotes + 1)
            setErr("Something went wrong! Please try again.")
        })
    }


    if (err) {
        console.log(err)
        return (
            <ErrorPage msg={err.error.response.data.msg} status={err.error.response.status} />
        )
    }
    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <Link to={"/"}>
                <Button variant="contained" sx={{ marginTop: "10px" }}>Back to Homepage</Button>
            </Link>
            <section className="article_view">
                <p>{article.title}</p>
                <p>{date}</p>
                <img src={article.article_img_url} height={300} width={300} />
                <p>By {article.author}</p>
                <p>{article.body}</p>
                <p>{votes} likes</p>
                {err ? <p>{err}</p> : null}
                <div className="votes_box">
                    <Button onClick={() => upVote(article_id)} sx={{ color: "white", marginRight: "5px" }}>Like</Button>
                    <Button onClick={() => downVote(article_id)} sx={{ color: "white", marginLeft: "5px" }}>Dislike</Button>
                </div>
            </section>
            <section className="comments_section">
                <CommentSection article_id={article_id} />
            </section>
        </>
    )

}

export default ArticleView;