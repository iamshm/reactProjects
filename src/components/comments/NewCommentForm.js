import { useRef, useState } from "react";
import styles from "./NewCommentForm.module.css";
const NewCommentForm = () => {
  const newCommentRef = useRef();
  const [error, setError] = useState(false);

  // const cancelComment = () => {
  //   setError(false);
  //   <Redirect to="/quotes" />;
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const comment = newCommentRef.current.value;

    if (comment.trim() !== "") {
      setError(false);
      // send to server
    } else {
      // dont send server show error
      setError(true);
    }
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control} onSubmit={submitHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={newCommentRef}></textarea>
        {error && <p>Cant add empty comment</p>}
      </div>
      <div className={styles.actions}>
        <button className="btn">Add Comment</button>
        {/* <button className="cancel-btn" onClick={cancelComment}>
          Cancel
        </button> */}
      </div>
    </form>
  );
};

export default NewCommentForm;
