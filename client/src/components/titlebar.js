import React from 'react';

export const Titlebar = ({ imgSrc, imgAlt, name }) => {
  return (
    <div style={styles.container}>
      <div style={styles.space1} />
      <div style={styles.imgContainer}>
        <img src={imgSrc} alt={imgAlt} style={styles.img}/>
      </div>
      <div style={styles.nameContainer}>
        <div style={styles.nameAlign}>
          <h4 style={styles.name}>{name}</h4>
        </div>
      </div>
      <div style={styles.space2}/>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    padding: '1px 0px',
    maxHeight: '60px',
    position: 'sticky',
    top: '0'
  },
  space1: {
    flex: 20
  },
  imgContainer: {
    display: 'flex',
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '10px'
  },
  img: {
    width: '50px',
    height: '50px'
  },
  nameContainer: {
    display: 'flex',
    flex: 3,
    backgroundColor: '#4db6ac',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    marginLeft: '3px',
    boxShadow: '0px 3px 1px #00897b',
    marginTop: '5px',
    marginBottom: '7px'
  },
  nameAlign: {
    flex: 1,
  },
  name: {
    fontFamily: 'Helvetica',
    color: '#fcfcf9'
  },
  space2: {
    flex: 0.5
  }
};

Titlebar.defaultProps = {
  imgAlt: 'Teacher icon',
  name: 'Dr. Shomari Malcolm'
};
