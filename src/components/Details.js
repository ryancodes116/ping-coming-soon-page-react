import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/Details.module.css';
import logo from '../images/logo.svg';

const Details = () => {
  const [formInfo, setFormInfo] = useState({
    email: '',
    emailError: '',
    borderColor: 'hsl(223, 100%, 88%)',
    errorDisplay: 'block',
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setFormInfo((prevFormInfo) => {
      return { ...prevFormInfo, email: value };
    });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  };

  const clearForm = () => {
    setFormInfo({
      email: '',
      emailError: '',
      borderColor: 'hsl(223, 100%, 88%)',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = validateEmail(formInfo.email);

    if (!validEmail) {
      setFormInfo((prevFormInfo) => {
        return {
          ...prevFormInfo,
          emailError: 'Please provide a valid email address',
          borderColor: 'hsl(354, 100%, 66%)',
          errorDisplay: 'block',
        };
      });
    } else {
      clearForm();
    }
  };

  return (
    <div>
      <div className={classNames('container', styles.detailsContent)}>
        <img className={styles.logo} src={logo} alt="Ping logo" />
        <h2 className={styles.title}>
          We are launching <span>soon!</span>
        </h2>
        <p className={styles.text}>Subscribe and get notified</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.emailWrapper}>
            <input
              className={classNames(styles.input, styles.email)}
              style={{ borderColor: formInfo.borderColor }}
              type="text"
              placeholder="Your email address..."
              value={formInfo.email}
              onChange={handleChange}
            />

            <em
              className={styles.errorMessage}
              style={{ display: formInfo.errorDisplay }}
            >
              {formInfo.emailError}
            </em>
          </div>

          <input
            className={classNames(styles.input, styles.submit)}
            type="submit"
            value="Notify Me"
          />
        </form>
      </div>
    </div>
  );
};

export default Details;
