/*import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         // { <Route path="/" element={<HomePage />} /> }
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
*/
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
      <Router>
        
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/courses' element={<CourseHome/>} />
          <Route path='/team' element={<Team/>} />
          {/* <Route path='/pricing' element={<Pricing/>} /> */}
          {/* //<Route path='/journal' element={<Blog/>} /> */}
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
  )
}

export default App

