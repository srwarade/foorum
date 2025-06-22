export type Post = {
  id: string;
  user: {
    userName: string;
    avatar: string;
  };
  postedAt: string;
  emoticon: string;
  content: string;
};
