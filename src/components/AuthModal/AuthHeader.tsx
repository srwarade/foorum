const AuthHeader = ({ isLoginStep }: { isLoginStep: boolean }) => {
  return (
    <>
      <span className="login-icon">
        <img src="images/login.png" />
      </span>
      <h2>
        {isLoginStep ? "Sign in to continue" : "Create an account to continue"}
      </h2>
      <h3>
        {isLoginStep
          ? "Sign in to access all the features on this app"
          : "Create an account to access all the features on this app"}
      </h3>
    </>
  );
};

export default AuthHeader;
