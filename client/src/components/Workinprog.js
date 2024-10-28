// WorkInProgress.js

import React from 'react';
import underConstructionImage from '../wip.jpg'; // Make sure to replace this with your actual image file

const Workinprogress = () => {
  return (
    <div style={styles.container}>
      <img src={underConstructionImage} alt="Under Construction" style={{height:"200px"}} />
      <h1 style={styles.title}>Work in Progress</h1>
      <p style={styles.message}>We are currently working on this page. Please check back later for updates.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  title: {
    color: '#e44d26',
  },
  message: {
    marginBottom: '20px',
  },
};

export default Workinprogress;
