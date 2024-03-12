import { useState, useEffect } from "react"
import { fetchArticles } from "../../api"
import ArticleDisplay from "../../ArticleDisplay"

const Homepage = () => {
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    fetchArticles().then((articlesFromApi) => {
    setArticles(articlesFromApi)
    setIsLoading(false)        
    })
}, [articles])

    return (
        <ArticleDisplay articles={articles} isLoading={isLoading} />
    )

}

export default Homepage