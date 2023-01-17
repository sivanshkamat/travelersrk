import React from 'react';
import web from '../src/images/jeep.jpg'
import Common from "./Common"

const App = () => {
  return(
    <>
    <Common
    name="Let's know more of Travel Stories by"
    name2="Traveller SRK"
    name3="I travelled all the states of India in 35 days."
    imgsrc={web}
    visit="/Feed"
    btname="Dive In"
    />
    </>
  );
};
export default App;
