import React, { useContext } from "react";
import MainHeader from "./component/MainHeader/MainHeader";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
};

export default App;
