import { useEffect } from "react"
import { useState } from "react"
import CommentCard from "./CommentCard"
import Loading from "./Loading"
import { fetchComments } from "../../api"

const CommentSection = ({article_id}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState({})

    useEffect(() => {
        fetchComments(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false)
        })
    });

    if(isLoading){
        return <Loading />
    }

    return ( 
    <section className="comments"> 
    <h3>Comments</h3>
    { comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />
    })}
    </section>
    )
}

export default CommentSection