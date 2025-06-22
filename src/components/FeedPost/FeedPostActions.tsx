const FeedPostActions = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="post-actions" onClick={handleClick}>
      <img src="images/post/like.png" alt="like" />
      <img src="images/post/comment.png" alt="comment" />
      <img src="images/post/share.png" alt="share" />
    </div>
  );
};

export default FeedPostActions;
