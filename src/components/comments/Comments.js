import React, { useState } from "react";
import styles from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const addCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <div>
      <section className={styles.comments}>
        <h2>User Comment</h2>
        {!isAddingComment && (
          <button className="btn" onClick={addCommentHandler}>
            Add a comment
          </button>
        )}
        {isAddingComment && <NewCommentForm />}
        <p>Comments .. </p>
      </section>
    </div>
  );
};

export default Comments;
