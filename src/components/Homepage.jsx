import { useState, useEffect } from "react"
import { fetchArticles } from "../../api"
import ArticlesDisplay from "./ArticlesDisplay"
import TopicPicker from './TopicPicker'
import { useParams } from "react-router"

const Homepage = () => {
const {topic} = useParams()
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [selectedTopic, setSelectedTopic] = useState(topic)

useEffect(() => {
    fetchArticles(selectedTopic).then((articlesFromApi) => {
    setArticles(articlesFromApi)
    setIsLoading(false)        
    })
}, [selectedTopic])

    return (
        <>
        <TopicPicker setSelectedTopic={setSelectedTopic} selectedTopic={selectedTopic}/>
        <ArticlesDisplay articles={articles} isLoading={isLoading} />
        </>
    )

}

export default Homepage