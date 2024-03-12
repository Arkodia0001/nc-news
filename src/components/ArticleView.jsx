import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../api";
import Loading from "./Loading";

const ArticleView = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

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
    <section className="article_view">
        <p>{article.title}</p>
        <p>By {article.author}</p>
        <img src={article.article_img_url} height={250} width={250}/>
        <p>{article.body}</p>
        <p>{article.votes} likes!</p>
    </section>
)

}

export default ArticleView;