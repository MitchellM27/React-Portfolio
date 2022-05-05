import React from 'react';

const styles = {
    footer: {
        background: '#75ABBC',
    }
};


function Footer() {
  return (
      <footer style={styles.footer}>
          <ul>
              <li>
                  Github
              </li>
              <li>
                  Linkdin
              </li>
          </ul>
      </footer>
  );
}

export default Footer;