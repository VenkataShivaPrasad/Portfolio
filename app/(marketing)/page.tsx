
import React from "react";

import Home from "./_components/Home";
import About from "./_components/About";
import Project from "./_components/Project";
import Contact from "./_components/Contact";
import Technologies from "./_components/Technologies";

const page = () => {
  return (
    <div>
      <Home/>
      <Project/>
      <Technologies/>
      <About/>
    </div>
  )
}



export default page
