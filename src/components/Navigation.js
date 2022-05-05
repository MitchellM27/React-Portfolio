import React from 'react';

const styles = {
  navBar: {
    background: '#75ABBC',
    color: "#071013",
    justifyContent: "space-between",
    display: "flex",
    listStyle: "none",
    minWidth: "275px",
    padding: "3%"
  },

  navItems: {
    display: "inline-block",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: "30px",
  }
};

function Navigation() {
  return (
    <section>
      <ul style={styles.navBar}>
        <li><a style= {styles.navItems}>About Me</a></li>
        <li><a style= {styles.navItems}>Work</a></li>
        <li><a style= {styles.navItems}>Contact Me</a></li>
        <li><a style= {styles.navItems}>Resume</a></li>
      </ul>
    </section>       
  );
}

export default Navigation;
