import React from 'react';

const styles = {
  headerStyle: {
    background: '#75ABBC',
    color: "#071013"
  },
};


function Header() {
  return (
    <header style={styles.headerStyle}>
        <h1>Mitchell Mudgett</h1>
    </header>
  );
}

export default Header;
