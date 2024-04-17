import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    const event = new Date(article.created_at)
    const date = event.toDateString()
    return (
        <Link to={`/articles/${article.article_id}`}>
            <div className="article_card">
                <div className="article_img">
                <img src={article.article_img_url} height={100} width={100} />
                </div>
                <div className="article_info">
                <p className="article_title">{article.title}</p>
                <p>{date}</p>
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard