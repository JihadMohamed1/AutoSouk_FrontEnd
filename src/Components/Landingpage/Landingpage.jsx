import React from 'react';
import'./Landingpage.css';
import Carousel from '../Carousel/Carousel';
import AboutComponent from '../AboutComponent/AboutComponent';
import ContactComponent from '../ContactComponent/ContactComponent';
import NavbarComponent from '../NavbarComponent/NavbarComponent';





export default function Landingpage() {
  return (
    <>
<NavbarComponent/>
<Carousel/>
<AboutComponent/>
<ContactComponent/>
</>
  );
}
