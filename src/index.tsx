import Courses from "./components/courses"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Kaki from "./components/footer"
import About from "./components/about"
import Benefit from "./components/benefit"
import Progam from "./components/progam"

import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

const Index= () => {

    useEffect(() => { 
      WebFont.load({
        google: {
          families: ['Josefin Sans:400', 'Work Sans'],
        },
      });
  
    }, []);
    return (
        <>
        
         <Navbar></Navbar>
         <Hero></Hero>
         <Courses></Courses>
         <About></About>
          <Progam></Progam>
         <Benefit></Benefit>
         <Kaki></Kaki>
        </>
    )
  }
  export default Index