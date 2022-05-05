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
    },

    footerListItems: {
        display: "inline-block",
        justifyContent: "flex-end",
        alignItems: "center",
        marginLeft: "30px",
    }
};


function Footer() {
  return (
      <footer style={styles.footer}>
          <ul style={styles.footerList}>
              <li style={styles.footerListItems}>
                  Github
              </li>
              <li style={styles.footerListItems}>
                  Linkdin
              </li>
          </ul>
      </footer>
  );
}

export default Footer;