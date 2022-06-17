<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import FAQ from './layouts/FAQ'
import {Routes,Route}  from 'react-router-dom'

import Home from './layouts/Home'
const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <FAQ/>
    </div>
  )
}
=======
import React from "react";
import Aboutus from "./layouts/Aboutus";
import CapexTeacher from "./layouts/CapexTeacher";
import Home from "./layouts/Home";
import TermsandConditions from "./layouts/TermsandConditions";
const App = () => {
	return (
		<div>
			{/* <Home /> */}
>>>>>>> a4d3af7 (capex teacher and termsandcondition)
=======
import React from "react";
import Aboutus from "./layouts/Aboutus";
import CapexTeacher from "./layouts/CapexTeacher";
import Home from "./layouts/Home";
import TermsandConditions from "./layouts/TermsandConditions";
const App = () => {
	return (
		<div>
			{/* <Home /> */}
>>>>>>> a4d3af74ce2d615cb82a31470c94cff246b49dd8

			{/* <CapexTeacher /> */}
			<TermsandConditions />

			{/* <Aboutus /> */}
		</div>
	);
};

export default App;
