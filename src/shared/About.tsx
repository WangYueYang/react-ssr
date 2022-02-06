import axios from 'axios';
import React, { useEffect, useState } from 'react';

function About() {

  const [data, setData] = useState('')

  // useEffect(() => {
  //   axios.get('http://localhost:3000/getData').then(res=> {
  //     setData(res.data.data)
  //   })
  // }, [])
  
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>About</nav>
      <div>{data}</div>
    </>
  );
}

About.loadData = () => {
  return new Promise((resolve) => {
    axios.get('http://localhost:3000/getData').then(res=> {
      resolve(res.data.data);  
    }) 
  })
}

export default About;
