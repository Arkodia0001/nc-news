import { deleteComment } from "./api"

const DeleteButton = ({comment, comments, setComments }) => {
    const commentsWithoutDeletedComment = comments.filter((commentItem) => {
        return commentItem.comment_id !== comment.comment_id
    })

    const handleClick = () => {
        setComments(commentsWithoutDeletedComment)
        deleteComment(comment.comment_id)        
    }

    return <button className="delete_button" onClick={handleClick}>Delete</button>
}


export default DeleteButton