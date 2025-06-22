import { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import type { User } from "../../types/common";

import "./header.scss";

type HeaderProps = {
  user: User;
  handleLogout: () => void;
  setIsLoginOpen: (isOpen: boolean) => void;
};

const Header = ({ user, handleLogout, setIsLoginOpen }: HeaderProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (user.userName) {
      navigate("/");
    }
  }, [user]);

  return (
    <header className="header">
      <h1>
        <img src="images/mouse.png" alt="logo" /> foo-rum
      </h1>
      {currentPath !== "/" ? (
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to home
        </button>
      ) : user.userName ? (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="login-btn" onClick={() => setIsLoginOpen(true)}>
          Login <img src="images/login.png" alt="login" />
        </button>
      )}
    </header>
  );
};

export default Header;
