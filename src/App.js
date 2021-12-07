import React, { Fragment, useEffect, useState } from "react";

import NewTask from "components/NewTask/NewTask";
import Tasks from "components/Tasks/Tasks";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://react-http-bd594-default-rtdb.firebaseio.com/tasks.json"
      );
      if (!res.ok) {
        throw new Error("Request Failed");
      }

      const data = await res.json();
      console.log("data", data);
      const loadedTasks = [];

      for (const i in data) {
        loadedTasks.push({ id: i, text: data[i].text });
      }
      console.log("loaddTasks", loadedTasks);
      setTasks(loadedTasks);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  return (
    <Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </Fragment>
  );
};

export default App;
