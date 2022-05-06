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
    marginLeft: "2px",
  }
};

function Navigation({currentPage, handlePageChange}) {
  return (
      <ul style={styles.navBar} className="nav">
        <li className='nav-item'><a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} style= {styles.navItems}>About Me</a></li>
        <li className='nav-item'><a href="#project" onClick={() => handlePageChange('Project')} className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}style= {styles.navItems}>Projects</a></li>
        <li className='nav-item'><a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}style= {styles.navItems}>Contact Me</a></li>
        <li className='nav-item'><a href="#resume" style= {styles.navItems}>Resume</a></li>
      </ul>     
  );
}

export default Navigation;
