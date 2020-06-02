import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Dashboard.module.css';
import dashboard from '../images/illustration-dashboard.png';

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <div className={classNames('container', styles.dashboardContent)}>
        <img src={dashboard} alt="Ping dashboard illustration" />
      </div>
    </div>
  );
};

export default Dashboard;
