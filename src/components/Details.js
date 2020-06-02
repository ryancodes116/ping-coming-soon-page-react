import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/Details.module.css';
import logo from '../images/logo.svg';

const Details = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
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
          <input
            className={classNames(styles.input, styles.email)}
            type="text"
            placeholder="Your email address..."
            value={email}
            onChange={handleChange}
          />

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
