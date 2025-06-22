import { DEFAULT_AVATAR } from "./common";

export const DEFAULT_FEED = [
  {
    id: "1",
    user: {
      userName: "John Doe",
      avatar: DEFAULT_AVATAR,
    },
    postedAt: "2025-05-01T12:00:00Z",
    emoticon: "😀",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "2",
    user: {
      userName: "Jane Smith",
      avatar: DEFAULT_AVATAR,
    },
    postedAt: "2025-05-02T14:30:00Z",
    emoticon: "😢",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: "3",
    user: {
      userName: "Alice Johnson",
      avatar: DEFAULT_AVATAR,
    },
    postedAt: "2025-05-03T19:15:00Z",
    emoticon: "😎",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
];
