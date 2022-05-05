import React from 'react';
import Navigation from "./Navigation";

const styles = {
  headerStyle: {
    background: '#75ABBC',
    color: "#071013",
    display: "flex",
    flexDirection: "horizontal",
    width: "100vw",
    padding: "1%"
  },

  headerName: {
    padding: "1%",
  },

  navSection: {
    display: "flex",
    justifyContent: "flex-end"
  }

};


function Header() {
  return (
    <header style={styles.headerStyle}>
      
      <section style={styles.headerName}>
        <h1>Mitchell Mudgett</h1>
      </section>

      <section style={styles.navSection} className= "col-8">
        <Navigation/>
      </section>
      
    </header>
  );
}

export default Header;
