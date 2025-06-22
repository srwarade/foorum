import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/index.tsx";
import Feed from "./components/Feed/index.tsx";
import AuthContainer from "./components/AuthModal/AuthContainer.tsx";

import { LOCAL_STORAGE_KEY } from "./constants/common";
import { ROUTES } from "./constants/routes.ts";

import type { User } from "./types/common.ts";

import "./App.css";

function App() {
  const [user, setUser] = useState<User>({} as User);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_KEY.LOGGEDIN_USER);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (user: User) => {
    setUser(user);
    localStorage.setItem(LOCAL_STORAGE_KEY.LOGGEDIN_USER, JSON.stringify(user));
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser({} as User);
    localStorage.removeItem(LOCAL_STORAGE_KEY.LOGGEDIN_USER);
    setIsAuthModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <>
                <Header user={user} handleLogout={handleLogout} />
                <Feed
                  user={user}
                  isAuthModalOpen={isAuthModalOpen}
                  onLogin={handleLogin}
                  setIsAuthModalOpen={setIsAuthModalOpen}
                />
              </>
            }
          />
          <Route
            path={ROUTES.LOGIN}
            element={
              <>
                <Header user={user} handleLogout={handleLogout} />
                <AuthContainer onLogin={handleLogin} />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
