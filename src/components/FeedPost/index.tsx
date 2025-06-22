import FeedPostActions from "./FeedPostActions";

import type { Post } from "../../types/feed";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

import "./feed-post.scss";

const FeedPost = ({
  post,
  handleClick,
}: {
  post: Post;
  handleClick: () => void;
}) => {
  const { content, user, emoticon } = post;

  const postedAt = post.postedAt;
  const now = dayjs();

  const diffInMinutes = now.diff(dayjs(postedAt), "minute");

  const formattedTime =
    diffInMinutes < 60
      ? dayjs(postedAt).fromNow()
      : dayjs(postedAt).format("D MMM YYYY, hh A");

  return (
    <div className="feed-post">
      <div className="post">
        <div className="post-header">
          <div className="author-image">
            <img src={user.avatar} alt="image" />
          </div>
          <div className="post-author-and-time">
            <span className="post-author">{user.userName}</span>
            <span className="post-time">{formattedTime}</span>
          </div>
        </div>
        <div className="post-content-container">
          <div className="emoticon-container">
            <span className="emoticon">{emoticon}</span>
          </div>
          <p className="content">{content}</p>
        </div>
      </div>
      <FeedPostActions handleClick={handleClick} />
    </div>
  );
};

export default FeedPost;
