import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import DeleteButton from "./DeleteButton";

const CommentCard = ({ comment, comments, setComments }) => {
  const event = new Date(comment.created_at)
  const date = event.toDateString()
  const { user, setUser } = useContext(UserContext)

  return (
    <div className="comment_card">
      <p>{comment.body}</p>
      <p>By {comment.author}</p>
      <p>{(date)}</p>
      <p>Votes: {comment.votes}</p>
      {user.username === comment.author && comment.comment_id !== undefined ? <DeleteButton comment={comment} comments={comments} setComments={setComments} /> : null}
    </div>
  );
};

export default CommentCard;
