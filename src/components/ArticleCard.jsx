import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    return (
        <Link to={`/articles/${article.article_id}`}>
            <div className="article_card">
                   <p>{article.title}</p>
            <img src={article.article_img_url} height={100} width={100}/>
                    <p>Likes: {article.votes}</p>
            </div>
        </Link>
    )
}

export default ArticleCard