import React from 'react';

const styles = {
  headerStyle: {
    background: '#75ABBC',
    color: "#071013"
  },
  headingStyle: {
    fontSize: '35px',
  },
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Mitchell Mudgett</h1>
    </header>
  );
}

export default Header;
