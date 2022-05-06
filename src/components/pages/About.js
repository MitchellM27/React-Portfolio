import React from 'react';

const styles = {
  about: { 
    background: '#75ABBC',
  }
};

export default function About() {
  return (
    <div style={styles.about}>
      <h1>About Me</h1>
      <p>
      My name is Mitchell Mudgett. I am from San Diego, CA and I am working on becoming a
            full stack web developer. I am 26 years old and looking to change my career path. This portfolio will contain work that I have completed in my 
            education process at the UCSD extension bootcamp, as well as projects that I have taken
            on my own.
      </p>
    </div>
  );
}