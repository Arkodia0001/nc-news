import { useState } from "react"
import { postNewComment } from "../../api"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"

const CommentAdder = ({ comments, setComments, article_id }) => {
    const [newComment, setNewComment] = useState("")
    const { user, setUser } = useContext(UserContext)
    const [err, setErr] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        setErr(null)
        const commentToSend = {
            username: user.username,
            body: newComment,
        }
        const newCommentFake = {
            article_id: article_id,
            author: user.username,
            body: newComment,
            created_at: new Date(),
            votes: 0,
        }
        const ogComments = comments
        setComments((comments) => [newCommentFake, ...comments])
        postNewComment(article_id, commentToSend).then((commentFromApi) => {
            setNewComment("")
        }).catch((err) => {
            setErr("Something went wrong! Please try again.")
            setComments(ogComments)
        })
        
    }
    return (
        <form className="CommentAdder" onSubmit={handleSubmit}>
            {err ? <p>{err}</p> : null}
            <label htmlFor="newComment">Add a comment
                <textarea id="newComment" multiline="true" value={newComment} onChange={(event) => setNewComment(event.target.value)}></textarea>
                <input type="submit" value="Submit"></input>
            </label>
        </form>
    )
}

export default CommentAdder