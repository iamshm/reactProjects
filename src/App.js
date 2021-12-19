import { Fragment } from "react";

import Auth from "components/Auth";
import Header from "components/Header";
import UserProfile from "components/UserProfile";
// import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserProfile />}
      {/* <Counter /> */}
    </Fragment>
  );
}

export default App;
