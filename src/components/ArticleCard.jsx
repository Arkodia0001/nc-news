import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    const event = new Date(article.created_at)
    const date = event.toDateString()
    return (
        <Link to={`/articles/${article.article_id}`}>
            <div className="article_card">
                   <p>{article.title}</p>
            <img src={article.article_img_url} height={100} width={100}/>
            <p>{date}</p>
                    <p>Likes: {article.votes}</p>
            </div>
        </Link>
    )
}

export default ArticleCard