import React from 'react';

const styles = {
  // headerStyle: {
  //   background: '#75ABBC',
  //   color: "#071013"
  // },
  // headingStyle: {
  //   fontSize: '35px',
  // },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1%",
  },

  navList: {
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "space-between",
    minWidth: "275px",
    listStyle: "none",
  }
};


function Header() {
  return (
    <header class="nav">
        <h1 class="nav-item">Mitchell Mudgett</h1>
        <nav class="nav-item" >
          <ul class = "navList">
            <li class="p-3"><a href="#about-me">About Me</a></li>
            <li class="p-3"><a href="#work">Work</a></li>
            <li class="p-3"><a href="#contact-me">Contact Me</a></li>
            <li class="p-3"><a href="Images/resume.PDF">Resume</a></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;
