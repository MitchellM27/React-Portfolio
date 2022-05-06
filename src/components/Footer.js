import React from 'react';

const styles = {
    footer: {
        background: '#75ABBC',
        justifyContent: "center",
        display: "flex",
        flexDirection: "horizontal"
    },

    footerList: {
        display: "flex",
        flexDirection: "horizontal",
        justifyContent: "space-between",
        listStyle: "none"
    },

    footerListItems: {
        display: "inline-block",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "30px",
    }
};


function Footer() {
  return (
      <footer style={styles.footer}>
          <ul style={styles.footerList}>
              <li >
                  <a href="https://github.com/MitchellM27" style={styles.footerListItems}>
                      Github
                  </a>
              </li>
              <li >
                  <a href="https://www.linkedin.com/in/mitchell-mudgett-1679041b1/" style={styles.footerListItems}>
                      Linkedin
                  </a>
              </li>
              <li >
                  <a href="https://stackoverflow.com/users/17502273/mitchell-mudgett" style={styles.footerListItems}>
                      Stacked Overflow
                  </a>
              </li>
          </ul>
      </footer>
  );
}

export default Footer;