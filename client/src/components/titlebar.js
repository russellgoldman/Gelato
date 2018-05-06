import React from 'react';

export const Titlebar = ({ imgSrc, imgAlt, name }) => {
  return (
    <div style={styles.container}>
      <div style={styles.space1}><h1 className="fw3 bright-blue pl3">gelato</h1></div>
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
    maxHeight: '60px',
    position: 'sticky',
    top: '0',
    zIndex: 1,
  },
  space1: {
    flex: 20,
    display: 'flex',
    alignItems: 'center',
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
    flex: 4,
    textAlign: 'center',
    alignItems: 'center',
  },
  nameAlign: {
    flex: 1,
  },
  name: {
    color: '#adadad',
    fontSize: '1.2em',
    fontWeight: '300'
  },
  space2: {
    flex: 0.5
  }
};

Titlebar.defaultProps = {
  imgAlt: 'Teacher icon',
  name: 'Dr. Shomari Malcolm'
};
