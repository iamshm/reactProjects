import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Home.module.css";
import AuthContext from "../../store/auth-context";

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Welcome Back</h1>
      <Button onClick={ctx.onLogout}>Log Out</Button>
    </Card>
  );
};

export default Home;
