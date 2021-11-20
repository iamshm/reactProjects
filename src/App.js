import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setusersList] = useState([]);
  const userListHandler = (uName, uAge) => {
    setusersList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.floor(Math.random() * 100) },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={userListHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
