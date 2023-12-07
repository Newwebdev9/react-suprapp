import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Registration.module.css";

const Registration = () => {
  const [formValues, setFormvalues] = useState({
    check: false,
    name: "",
    username: "",
    mail: "",
    mobile: "",
  });
  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [signupError, setSignupError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormvalues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!(formValues.name.trim().length > 0)) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }
    if (!(formValues.username.trim().length > 0)) {
      setUserNameError(true);
      valid = false;
    } else {
      setUserNameError(false);
    }
    if (!(formValues.mail.trim().length > 0)) {
      setMailError(true);
      valid = false;
    } else {
      setMailError(false);
    }
    if (!(formValues.mobile.trim().length > 0)) {
      setMobileError(true);
      valid = false;
    } else {
      setMailError(false);
    }
    if (!formValues.check) {
      setSignupError(true);
      valid = false;
    } else {
      setSignupError(false);
    }
    if (valid) {
      window.localStorage.setItem("userData", JSON.stringify(formValues));
      navigate("/Part");
    }
  };
  return (
    <div className={styles.body}>
      <p className={styles.super}>SuperApp</p>
      <p>Create new Account</p>
      <p>
        Email <span style={{ color: "green" }}>|</span> Google
      </p>
      <form>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="name"
          placeholder="Name"
        ></input>
        {nameError ? <p className={styles.error}>plz fill correctly</p> : <></>}
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          placeholder="User Name"
        ></input>
        {userNameError ? (
          <p className={styles.error}>plz fill correctly</p>
        ) : (
          <></>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          name="mail"
          placeholder="Email"
        ></input>
        {mailError ? <p className={styles.error}>plz fill correctly</p> : <></>}
        <input
          onChange={(e) => handleChange(e)}
          type="tel"
          name="mobile"
          placeholder="Mobile"
        ></input>
        {mobileError ? (
          <p className={styles.error}>plz enter correctly</p>
        ) : (
          <></>
        )}
        <label>
          <input
            onChange={(e) =>
              setFormvalues({
                ...formValues,
                [e.target.name]: e.target.checked,
              })
            }
            type="checkBox"
            name="check"
          />
          Share my registration data with 'SuperApp'
        </label>
        {signupError ? (
          <p className={styles.error}>plz click on the box</p>
        ) : (
          <></>
        )}
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          SIGN UP
        </button>
      </form>
      <footer className={styles.footer}>
        <p>
          By clicking on Sign up. you agree to SuperApp
          <span style={{ color: "green" }}> Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how SuperApp collects, uses, shares and protects
          your personal data please head SuperApp
          <span style={{ color: "green" }}> Privacy Policy</span>
        </p>
      </footer>
    </div>
  );
};

export default Registration;
