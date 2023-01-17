import React from 'react';
import Common from './Common';
import web from "../src/images/about.jpg"

const About = () => {
  return(
    <>
    
    <Common
    name="Let's roam around the world"
    name2="Together"
    name3="Do you wanna partner up with us and roam around?."
    imgsrc={web}
    visit="/Contact"
    btname="Contact Now"
    />
    </>
  );
};


export default About;
