import React from 'react';
import pdf from '../assets/resume.PDF'

const styles = {
  resume: { 
    background: '#75ABBC',
  }
};

export default function Resume() {
  return (
    <div style={styles.resume}>
      <a href={pdf} target= "_blank" rel="noreferrer">My Resume</a>
      <div>
          <h2> Proficiencies </h2>
          <ul>
            <li> HTML </li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>Progressive Web Applications</li>
            <li>React</li>
            <li>Mongo</li>
          </ul>
      </div>
    </div>
  );
}