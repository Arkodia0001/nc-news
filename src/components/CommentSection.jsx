import { useEffect } from "react"
import { useState } from "react"
import CommentCard from "./CommentCard"
import Loading from "./Loading"
import { fetchComments } from "./api"
import CommentAdder from "./CommentAdder"



const CommentSection = ({ article_id }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState({})

    useEffect(() => {
        fetchComments(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className="comments">
            <h3>Comments</h3>
            <div className="comment_adder_box">
                <div className="comment_adder">
                    <CommentAdder comments={comments} setComments={setComments} article_id={article_id} />
                </div>
            </div>
            <div className="Comment_section">
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment} comments={comments} setComments={setComments} />
                })}
            </div>
        </section>
    )
}

export default CommentSection