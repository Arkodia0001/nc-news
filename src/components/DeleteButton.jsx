import { deleteComment } from "../../api"

const DeleteButton = ({comment, comments, setComments }) => {
    const commentsWithoutDeletedComment = comments.filter((commentItem) => {
        return commentItem.comment_id !== comment.comment_id
    })

    const handleClick = () => {
        setComments(commentsWithoutDeletedComment)
        deleteComment(comment.comment_id)        
    }

    return <button onClick={handleClick}>Delete your comment</button>
}


export default DeleteButton