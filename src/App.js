import React from "react";
import Nav from "./Component/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'; // Assuming you want to use the fa-backward icon
import "./App.css";
import Intro from "./Component/Intro";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./pages/Page";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Contact_page from "./Component/Contact_page";
import Exempls from "./pages/Exempls";
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';

// const buttons = [
//   <Button key="one">One</Button>,
//   <Button key="two">Two</Button>,
//   <Button key="three">Three</Button>,
// ];
function Home() {
  return (
    <>
      <Nav ul="yes"/>
      <Intro />
      <Body />
      <Footer />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={< Home/>}/>
          <Route path="/cours" element={<Page />} />
          <Route path="/contact" element={<Contact_page/>} />
          <Route path="/exempls" element={<Exempls/>} />
        {/* <Home/> */}
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
