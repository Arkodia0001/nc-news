import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { fetchArticle } from "./api";
import Loading from "./Loading";
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";
import { increaseArticleVotes, decreaseArticleVotes } from "./api";

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
        });
    }, [article_id]);

    const upVote = (article_id) => {
        setVotes((currVotes) => currVotes +1)
        setErr(null)
        increaseArticleVotes(article_id).catch((err)=> {
            setVotes((currVotes) => currVotes -1)
            setErr("Something went wrong! Please try again.")
        })
    }

    const downVote = (article_id) => {
        setVotes((currVotes) => currVotes -1)
        setErr(null)
        decreaseArticleVotes(article_id).catch((err)=> {
            setVotes((currVotes) => currVotes +1)
            setErr("Something went wrong! Please try again.")
        })
    }

if(isLoading){
    return <Loading/>
}

return (
    <>
    <Link to={"/"}>
    <button>Back to Homepage</button>
    </Link>
    <section className="article_view">
        <p>{article.title}</p>
        <p>{date}</p>
        <img src={article.article_img_url} height={250} width={250}/>
        <p>By {article.author}</p>
        <p>{article.body}</p>
        <p>{votes} likes!</p>
        {err ? <p>{err}</p> : null}
        <button onClick={() => upVote(article_id)}>UPVOTE</button>
        <button onClick={() => downVote(article_id)}>DOWNVOTE</button>
    </section>
    <section className="comments_section">
        <CommentSection article_id={article_id}/>
    </section>
    </>
)

}

export default ArticleView;