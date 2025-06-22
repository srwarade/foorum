import { useEffect, useState } from "react";

import FeedPost from "../FeedPost";
import CreatePost from "../CreatePost";
import AuthModal from "../AuthModal";
import Modal from "../Modal";

import { DEFAULT_FEED } from "../../constants/feed";
import { DEFAULT_AVATAR, LOCAL_STORAGE_KEY } from "../../constants/common";
import { getRandomEmoticon } from "../../utils/common";

import type { Post } from "../../types/feed";
import type { User } from "../../types/common";

import "./feed.scss";

type Props = {
  user: User;
  isAuthModalOpen: boolean;
  onLogin: (user: User) => void;
  setIsAuthModalOpen: (isOpen: boolean) => void;
};

const Feed = ({
  user,
  isAuthModalOpen,
  onLogin,
  setIsAuthModalOpen,
}: Props) => {
  const [feed, setFeed] = useState<Post[]>(DEFAULT_FEED);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedFeed = localStorage.getItem(LOCAL_STORAGE_KEY.FEED);
    if (storedFeed) {
      const userFeed = JSON.parse(storedFeed);
      setFeed(userFeed);
    }
  }, []);

  const handleCheckIfUserLoggedIn = () => {
    if (!user.userName) {
      setIsAuthModalOpen(true);
    }
  };

  const handleFeatureUnavailable = () => {
    if (user.userName) {
      setIsModalOpen(true);
    }
  };

  const handleCreatePost = (content: string) => {
    if (!user.userName || !content.trim()) {
      return;
    }

    const newPost: Post = {
      id: Date.now().toString(),
      user: {
        userName: user.userName,
        avatar: user.avatar ? user.avatar : DEFAULT_AVATAR,
      },
      postedAt: new Date().toISOString(),
      emoticon: getRandomEmoticon(),
      content,
    };

    const updatedFeed = [newPost, ...feed];
    setFeed(updatedFeed);
    localStorage.setItem(LOCAL_STORAGE_KEY.FEED, JSON.stringify(updatedFeed));
  };

  return (
    <>
      <section
        className="feed"
        onClick={handleCheckIfUserLoggedIn}
        aria-hidden={isModalOpen}
      >
        <CreatePost
          handleCreatePost={handleCreatePost}
          handleClick={handleFeatureUnavailable}
        />
        {feed.map((post: Post) => (
          <FeedPost
            post={post}
            key={post.id}
            handleClick={handleFeatureUnavailable}
          />
        ))}
      </section>
      {isAuthModalOpen && <AuthModal onLogin={onLogin} />}
      {isModalOpen && <Modal setIsOpen={setIsModalOpen} />}
    </>
  );
};

export default Feed;
