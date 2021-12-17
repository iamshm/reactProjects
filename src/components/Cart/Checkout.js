import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const empty = (value) => value.trim() === "";
  const fiveChar = (value) => value.trim().length === 6;

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const streetName = streetRef.current.value;
    const postalName = postalRef.current.value;
    const cityName = cityRef.current.value;

    console.log(enteredName, streetName, cityName, postalName);
    const enteredNameisValid = !empty(enteredName);
    const streetNameisValid = !empty(streetName);
    const postalNameisValid = fiveChar(postalName);
    const cityNameisValid = !empty(cityName);

    setFormInputValidity({
      name: enteredNameisValid,
      street: streetNameisValid,
      city: cityNameisValid,
      postalCode: postalNameisValid,
    });

    const formIsValid =
      enteredNameisValid &&
      streetNameisValid &&
      postalNameisValid &&
      cityNameisValid;

    console.log(formInputValidity);

    if (!formIsValid) {
      return;
    }
    props.onOrder({
      name: enteredName,
      street: streetName,
      city: cityName,
      postalCode: postalName,
    });
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${
          formInputValidity.name ? "" : styles.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputValidity.name && <p>Enter a Valid Name</p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputValidity.street ? "" : styles.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputValidity.street && <p>Enter a Valid street Name</p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputValidity.postalCode ? "" : styles.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formInputValidity.postalCode && <p>Enter a Valid postal code </p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputValidity.city ? "" : styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputValidity.city && <p>Enter a Valid city Name</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
