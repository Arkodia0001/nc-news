import { useState, useEffect } from "react"
import { fetchArticles } from "../../api"
import ArticlesDisplay from "./ArticlesDisplay"

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
        <ArticlesDisplay articles={articles} isLoading={isLoading} />
    )

}

export default Homepage