import { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import type { User } from "../../types/common";

import "./header.scss";

type HeaderProps = {
  user: User;
  handleLogout: () => void;
};

const Header = ({ user, handleLogout }: HeaderProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (user.userName) {
      navigate(ROUTES.HOME);
    }
  }, [user]);

  return (
    <header className="header">
      <h1>
        <img src="images/mouse.png" alt="logo" /> foo-rum
      </h1>
      {currentPath !== ROUTES.HOME ? (
        <button className="back-btn" onClick={() => navigate(ROUTES.HOME)}>
          Back to home
        </button>
      ) : user.userName ? (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="login-btn" onClick={() => navigate(ROUTES.LOGIN)}>
          Login <img src="images/login.png" alt="login" />
        </button>
      )}
    </header>
  );
};

export default Header;
