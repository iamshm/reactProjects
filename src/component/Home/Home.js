import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={styles.home}>
      <h1>Welcome Back</h1>
      <Button onClick={props.onLogout}>Log Out</Button>
    </Card>
  );
};

export default Home;
