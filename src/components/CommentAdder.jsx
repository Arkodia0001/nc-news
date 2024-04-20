import { useState } from "react"
import { postNewComment } from "./api"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"

const CommentAdder = ({ comments, setComments, article_id }) => {
    const [newComment, setNewComment] = useState("")
    const { user, setUser } = useContext(UserContext)
    const [err, setErr] = useState(null)
    const [posting, setPosting] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setPosting(true)
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
        const originalComments = [...comments]
        setComments((comments) => [newCommentFake, ...comments])
        postNewComment(article_id, commentToSend).then((commentFromApi) => {
            setNewComment("")
            setPosting(false)
            setComments([commentFromApi, ...originalComments])
        }).catch((err) => {
            setErr("Something went wrong! Please try again.")
            setComments(originalComments)
            setPosting(false)
        })

    }
    return (
        <form onSubmit={handleSubmit}>
            {err ? <p>{err}</p> : null}
            <label htmlFor="newComment" >Add a comment <br />
                <textarea
                    id="newComment"
                    multiline="true"
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                    required
                    style={{ margin: "20px" }}
                ></textarea>
                <input className="submit_button" type="submit" value="Submit" disabled={newComment.length === 0 || posting === true}></input>
            </label>
        </form>
    )
}

export default CommentAdder