import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../api";
import Loading from "./Loading";
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";

const ArticleView = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const event = new Date(article.created_at)
    const date = event.toDateString()

    useEffect(() => {
        fetchArticle(article_id).then((articleFromApi) => {
            setArticle(articleFromApi[0])
            setIsLoading(false)
        });
    }, [article_id]);

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
        <p>{article.votes} likes!</p>
    </section>
    <section className="comments_section">
        <CommentSection article_id={article_id}/>
    </section>
    </>
)

}

export default ArticleView;