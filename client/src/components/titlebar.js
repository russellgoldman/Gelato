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
    backgroundColor: '#3f51b5',
    padding: '1px 0px',
    maxHeight: '60px'
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
    backgroundColor: '#ef5350',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: '4%',
    marginLeft: '3px',
    boxShadow: '0px 3px 1px #bf4240',
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
