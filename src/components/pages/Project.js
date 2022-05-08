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
  }


};


function Project() {
  return (
    <section style={styles.sectionStyles}>
      <section style={styles.projectTitle}>
        <h2>Projects</h2>
      </section>

      <section>
        <div style= {styles.projectsContainer} className="projectsContainer container d-flex justify-content-around">
          <div className='row align-items-center justify-content-around col-8'>
            <div className='projectOne col'>
              <div>
                <h4 className='row'>Text Editor</h4>
                <a className='row' href='https://github.com/MitchellM27/Text-Editor'>Github</a>
                <a className='row' href='https://hidden-plateau-11846.herokuapp.com/'>Live Link</a>
              </div>
            </div>
            <div className='projectTwo col'>
                <h4 className='row'>Social Network API</h4>
                <a className='row' href='https://github.com/MitchellM27/Social-Network-API'>Github</a>
            </div>
            <div className='projectThree col'>
                <h4 className='row'>Tech Blog</h4>
                <a className='row' href='https://github.com/MitchellM27/Tech-Blog'>Github</a>
                <a className='row' href='https://serene-atoll-54262.herokuapp.com/'>Live Link</a>
            </div>
          </div>
          <div className='row align-items-center justify-content-around col-8'>
            <div className='projectFour col'>
                <h4 className='row'>E-Commerce Back End</h4>
                <a className='row' href='https://github.com/MitchellM27/E-Commerce-Back-End'>Github</a>
            </div>
            <div className='projectFive col'>
                <h4 className='row'>Stock Finder Application</h4>
                <a className='row' href='https://github.com/MitchellM27/Stock-Finder-Application'>Github</a>
                <a className='row' href='https://mitchellm27.github.io/Stock-Finder-Application/'>Live Link</a>
            </div>
            <div className='projectSix col'>
                <h4 className='row'>Work Day Scheduler</h4>
                <a className='row' href='https://github.com/MitchellM27/Work-Day-Scheduler'>Github</a>
                <a className='row' href='https://mitchellm27.github.io/Work-Day-Scheduler/'>Live Link</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Project;
