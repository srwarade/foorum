import { useRef } from "react";

import OptionPalette from "./OptionPalette";
import PostActions from "./PostActions";

import "./create-post.scss";

const CreatePost = ({
  handleCreatePost,
  handleClick,
}: {
  handleCreatePost: (content: string) => void;
  handleClick: () => void;
}) => {
  const postRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="feed-post">
      <div className="post create-post-container">
        <OptionPalette handleClick={handleClick} />
        <div className="main-container">
          <img src="images/post-action/emoji.png" alt="mood" />
          <textarea
            placeholder="How are you feeling today?"
            className="post-textarea"
            rows={5}
            ref={postRef}
          />
        </div>
        <PostActions
          handlePost={() => {
            if (postRef?.current?.value) {
              handleCreatePost(postRef?.current?.value);
              postRef.current.value = "";
            }
          }}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default CreatePost;
