
import { BrowserRouter, Route, Routes  } from "react-router-dom";

import './App.css';
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import About from "./Component/About"
import Academics from "./Component/Academics"
import Departments from "./Component/Departments"
import Student from "./Component/Student"

import Examination from "./Component/Examination"
import Placement from "./Component/Placement"

import Resources from "./Component/Resources"
import Research from "./Component/Research"
import Iqac from "./Component/Iqac"


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About/>} />
        <Route path="/Academics" element={<Academics/>} />
        <Route path="/Departments" element={<Departments/>} />
        <Route path="/Student" element={<Student/>} />
        
        <Route path="/Examination" element={<Examination/>} />
        <Route path="/Placement" element={<Placement/>} />
       
        <Route path="/Resources" element={<Resources/>} />
        <Route path="/Research" element={<Research/>} />
       
        <Route path="/Iqac" element={<Iqac/>} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
