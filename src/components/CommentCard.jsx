const CommentCard = ({ comment }) => {
    const event = new Date(comment.created_at)
    const date = event.toDateString()
  return (
    <div className="comment_card">
      <p>{comment.body}</p>
      <p>By {comment.author}</p>
      <p>{(date)}</p>
      <p>Likes: {comment.votes}</p>
    </div>
  );
};

export default CommentCard;
