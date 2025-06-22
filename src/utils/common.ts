import { DUMMY_USERS, EMOTICONS, LOCAL_STORAGE_KEY } from "../constants/common";

export const getRandomEmoticon = () => {
  return EMOTICONS[Math.floor(Math.random() * EMOTICONS.length)];
};

export const checkIfUserExists = (userName: string, password: string) => {
  const storedUsersJSON = localStorage.getItem(
    LOCAL_STORAGE_KEY.REGISTERED_USERS
  );
  const localUsers = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

  const allUsers = [...DUMMY_USERS, ...localUsers];

  return allUsers.find(
    (user) => user.userName === userName && user.pass === password
  );
};

export const registerUser = (userName: string, password: string) => {
  const storedUsersJSON = localStorage.getItem(
    LOCAL_STORAGE_KEY.REGISTERED_USERS
  );
  const localUsers = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

  // Prevent duplicate registrations
  if (localUsers.find((user: any) => user.userName === userName)) {
    return { success: false, error: "User already exists" };
  }

  const newUsers = [...localUsers, { userName: userName, pass: password }];
  localStorage.setItem(
    LOCAL_STORAGE_KEY.REGISTERED_USERS,
    JSON.stringify(newUsers)
  );
  return { success: true };
};
