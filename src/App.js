// import React, { useState } from "react";
// import Sidebare from "./components/Sidebar.js";
// import Header from "./components/Header.js";
// import "./App.css";

// export default function App() {
//   const [sidebarOpen, setSideBarOpen] = useState(false);
//   const handleViewSidebar = () => {
//     setSideBarOpen(!sidebarOpen);
//   };
//   return (
//     <span>
//       <Header onClick={handleViewSidebar} />
//       <Sidebare isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
//     </span>

 import React from 'react'
 import 'bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './components/Home';

import Facebook from './Facebook';
import Responsive from './pages/Responsive';
import Shofiy from './Shofiy';
// import DisplayTable from './components/DisplayTable';
import Get from './components/Get';




 const App = () => {
   return (
     <div>
{/* <Shofiy/> */}
{/* <Get/> */}
 <Facebook/> 
{/* <DisplayTable/> */}
{/* <Responsive/> */}
     </div>
   )
 }

 export default App;

// import "./App.css";
// import Sidebar from "./components/Sidebar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
// import {
//   Services,
//   ServicesOne,
//   ServicesTwo,
//   ServicesThree,
// } from "./pages/Services";
// import { Events, EventsOne, EventsTwo } from "./pages/Events";
// import Contact from "./pages/ContactUs";
// import Support from "./pages/Support";
// function App() {
//   return (
//     <div className="container">
//     <Router>
//       <Sidebar />
//       <Routes>
//         <Route path='/about-us' element={<AboutUs/>} />
//         <Route path='/about-us/aim' element={<OurAim/>} />
//         <Route path='/about-us/vision' element={<OurVision/>} />
//         <Route path='/services' element={<Services/>} />
//         <Route path='/services/services1' element={<ServicesOne/>} />
//         <Route path='/services/services2' element={<ServicesTwo/>} />
//         <Route path='/services/services3' element={<ServicesThree/>} />
//         <Route path='/contact' element={<Contact/>} />
//         <Route path='/events' element={<Events/>} />
//         <Route path='/events/events1' element={<EventsOne/>} />
//         <Route path='/events/events2' element={<EventsTwo/>} />
//         <Route path='/support' element={<Support/>} />

//       </Routes>
//     </Router>
//     </div>
//   );
// }
   
// export default App;
// import React from 'react'
// import Text from './components/Text.js'
// import 

// const App = () => {
//   return (
//     <div>
//       <Text/>
//     </div>
//   )
// }

// export default App

 