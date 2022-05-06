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
  }
};


function Project() {
  return (
    <section style={styles.sectionStyles}>
      <section style={styles.projectTitle}>
        <h2>Projects</h2>
      </section>

      <section>
        <div className="container">
          <div>project1</div>
          <div>project1</div>
          <div>project1</div>
          <div>project1</div>

        </div>
      </section>
    </section>
  );
}

export default Project;
