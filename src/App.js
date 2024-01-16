import React from 'react';
import Nav from './Component/Nav';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBackward } from '@fortawesome/free-solid-svg-icons'; // Assuming you want to use the fa-backward icon
import './App.css';
import Intro from './Component/Intro';
import Body from './Component/Body';
import Footer from './Component/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';

// const buttons = [
//   <Button key="one">One</Button>,
//   <Button key="two">Two</Button>,
//   <Button key="three">Three</Button>,
// ];

function App() {
  return (
    <>
      <Nav /> 
      <Intro/>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
