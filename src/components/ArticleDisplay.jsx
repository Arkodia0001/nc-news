import ArticleCard from "./ArticleCard"
import Loading from "./src/components/Loading"

const ArticleDisplay = ({articles, isLoading}) => {
    if(isLoading){
        return <Loading />
    }

    return (
        <section className="articles_display">
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article} />
            })}
        </section>
    );
};

export default ArticleDisplay