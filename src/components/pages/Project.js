import React from 'react';


const styles = {
  sectionStyles: {
    background: '#75ABBC',
    color: "#071013",
    padding: "3%",
    flexDirection: "vertical",
    justifyContent: "center"
  },

  projectTitle: {
    justifyContent: "center"
  },

  projectsContainer: {
    flexDirection: "horizontal",
    flex: "wrap"
  },
  box: {
    height:"250px",
    width:"250px",
    display:"block",
    marginBottom:"15px",
    border: "2px",
    borderStyle: "solid",
    borderColor: "black",
    alignItems: "center"
  }


};


function Project() {
  return (
    <section style={styles.sectionStyles}>
      <section style={styles.projectTitle}>
        <h2>Projects</h2>
      </section>

      <section>
      <div class="row"> 
     <div class="col-md-4 col-sm-6">
        <span class="box" className='row' style={styles.box}>
          <h4 className='row my-auto'>Text Editor</h4>
          <a className='row' href='https://github.com/MitchellM27/Text-Editor'>Github</a>
          <a className='row' href='https://hidden-plateau-11846.herokuapp.com/'>Live Link</a>
				</span>
    </div>
    <div class="col-md-4 col-sm-6">
      <span class="box" style={styles.box}>
        <h4 className='row my-auto'>Social Network API</h4>
        <a className='row' href='https://github.com/MitchellM27/Social-Network-API'>Github</a>
			</span>
    </div>
    <div class="col-md-4 col-sm-6">
       <span class="box" style={styles.box}>
         <h4 className='row'>Tech Blog</h4>
         <a className='row' href='https://github.com/MitchellM27/Tech-Blog'>Github</a>
         <a className='row' href='https://serene-atoll-54262.herokuapp.com/'>Live Link</a>		
				</span>
    </div>

    <div class="col-md-4 col-sm-6">
        <span class="box" style={styles.box}>
          <h4 className='row'>E-Commerce</h4>
          <a className='row' href='https://github.com/MitchellM27/E-Commerce-Back-End'>Github</a>
				</span>
    </div>
    <div class="col-md-4 col-sm-6">
        <span class="box" style={styles.box}>
          <h4 className='row'>Stock Finder App</h4>
          <a className='row' href='https://github.com/MitchellM27/Stock-Finder-Application'>Github</a>
          <a className='row' href='https://mitchellm27.github.io/Stock-Finder-Application/'>Live Link</a>
				</span>
    </div>
    <div class="col-md-4 col-sm-6">
        <span class="box" style={styles.box}>
          <h4 className='row'>Work Day Scheduler</h4>
          <a className='row' href='https://github.com/MitchellM27/Work-Day-Scheduler'>Github</a>
          <a className='row' href='https://mitchellm27.github.io/Work-Day-Scheduler/'>Live Link</a>
				</span>
    </div>
</div>
      </section>
    </section>
  );
}

export default Project;
