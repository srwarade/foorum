import { useState } from "react";
import { useLocation } from "react-router-dom";

import AuthHeader from "./AuthHeader";

import { checkIfUserExists, registerUser } from "../../utils/common";
import { DEFAULT_AVATAR } from "../../constants/common";

import type { User } from "../../types/common";

type Props = {
  onLogin: (user: User) => void;
};

const AuthContainer = ({ onLogin }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "");

  const [isLoginStep, setIsLoginStep] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const clearErrors = () => {
    setNameError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const handleSubmit = () => {
    clearErrors();

    if (!userName) {
      setNameError("Enter your email or username!");
      return;
    }
    if (!password) {
      setPasswordError("Password is required!");
      return;
    }

    if (!isLoginStep) {
      if (!confirmPassword) {
        setConfirmPasswordError("Confirm password is required!");
        return;
      }
      if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match!");
        return;
      }

      const result = registerUser(userName, password);
      if (!result.success) {
        setNameError(result.error || "User registration failed!");
        return;
      }
    }

    const matchedUser = checkIfUserExists(userName, password);
    if (!matchedUser) {
      setNameError("Invalid username or password!");
      return;
    }

    onLogin({
      userName: userName,
      avatar: DEFAULT_AVATAR,
    });
  };

  return (
    <div
      className={`auth-container ${currentPath} ${
        isLoginStep ? "signin" : "signup"
      }`}
    >
      <div className="auth-content">
        <AuthHeader isLoginStep={isLoginStep} />

        <label className="auth-label">Email or username</label>
        <input
          type="text"
          placeholder="Enter your email or username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            setNameError("");
          }}
        />
        {nameError && <p className="error">{nameError}</p>}

        <label className="auth-label">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
        />
        {passwordError && <p className="error">{passwordError}</p>}

        {!isLoginStep && (
          <>
            <label className="auth-label">Repeat password</label>
            <input
              type="text"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError("");
              }}
            />
            {confirmPasswordError && (
              <p className="error">{confirmPasswordError}</p>
            )}
          </>
        )}
        <button onClick={handleSubmit}>
          {isLoginStep ? "Sign In" : "Sign Up"}
        </button>
      </div>
      <div className="auth-footer">
        {isLoginStep ? "Do not have an account?" : "Already have an account"}
        <button onClick={() => setIsLoginStep((prev) => !prev)}>
          {isLoginStep ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default AuthContainer;
