import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import DeleteButton from "./DeleteButton";
import { increaseCommentVotes, decreaseCommentVotes } from "./api";

const CommentCard = ({ comment, comments, setComments }) => {
  const event = new Date(comment.created_at)
  const date = event.toDateString()
  const { user, setUser } = useContext(UserContext)
  const [err, setErr] = useState(null)
  const [votes, setVotes] = useState(0)
  
  useEffect(() => {
  setVotes(comment.votes)
  }, [])

  const upVote = (comment_id) => {
    setVotes((currVotes) => currVotes +1)
    setErr(null)
    increaseCommentVotes(comment_id).catch((err)=> {
        setVotes((currVotes) => currVotes -1)
        setErr("Something went wrong! Please try again.")
    })
}

const downVote = (comment_id) => {
    setVotes((currVotes) => currVotes -1)
    setErr(null)
    decreaseCommentVotes(comment_id).catch((err)=> {
        setVotes((currVotes) => currVotes +1)
        setErr("Something went wrong! Please try again.")
    })
}

  return (
    <div className="comment_card">
      <p>{comment.body}</p>
      <p>By {comment.author}</p>
      <p>{(date)}</p>
      <p>{votes} likes!</p>
      {err ? <p>{err}</p> : null}
      <div className="votes_box">
      {user.username !== comment.author && comment.comment_id !== undefined ? <button onClick={() => upVote(comment.comment_id)}>Like</button>  : null}
      {user.username !== comment.author && comment.comment_id !== undefined ? <button onClick={() => downVote(comment.comment_id)}>Dislike</button> : null}
      </div>
      {user.username === comment.author && comment.comment_id !== undefined ? <DeleteButton comment={comment} comments={comments} setComments={setComments} /> : null}
    </div>
  );
};

export default CommentCard;
