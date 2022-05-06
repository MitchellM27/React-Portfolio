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
          <div className='row align-items-center'>
            <div className='projectOne col'>project1</div>
            <div className='projectTwo col'>project1</div>
            <div className='projectThree col'>project1</div>
          </div>
          <div className='row align-items-center'>
            <div className='projectFour col'>project1</div>
            <div className='projectFive col'>project1</div>
            <div className='projectSix col'>project1</div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Project;
