import AuthContainer from "./AuthContainer";

import type { User } from "../../types/common";

import "./auth-modal.scss";

type Props = {
  onLogin: (user: User) => void;
};

const AuthModal = ({ onLogin }: Props) => {
  return (
    <section className="auth-modal" role="dialog" aria-modal="true">
      <AuthContainer onLogin={onLogin} />
    </section>
  );
};

export default AuthModal;
