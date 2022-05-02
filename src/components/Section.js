import React from 'react';


const styles = {
  sectionStyles: {
    background: '#75ABBC',
    color: "#071013"
  },
};


function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Projects</h2>
    </section>
  );
}

export default Section;
