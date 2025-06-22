const PostActions = ({
  handlePost,
  handleClick,
}: {
  handlePost: () => void;
  handleClick: () => void;
}) => {
  return (
    <div className="post-actions-container">
      <div className="create-post-actions" onClick={handleClick}>
        <img src="images/post-action/add.png" alt="add" />
        <img src="images/post-action/mic.png" alt="mic" />
        <img src="images/post-action/video.png" alt="video" />
      </div>
      <button className="post-button" onClick={handlePost}>
        <img src="images/post-action/post.png" alt="post" />
      </button>
    </div>
  );
};

export default PostActions;
