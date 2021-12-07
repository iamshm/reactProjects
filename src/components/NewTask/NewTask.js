import { useState } from "react";
import Section from "components/UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://react-http-bd594-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          body: JSON.stringify({ text: taskText }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Request Failed");
      }
      const data = await res.json();

      const generatedId = data.name;
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
