import './App.css'
import Header from './components/layout/Header'
import Body from './components/layout/Body'
import Footer from './components/layout/Footer'

import { useState } from "react";
import Carousel from './components/views/Carousel';


const App = () => {

  let [counter, counterSet] = useState(0);
  const toggleMenu = () => {
    let navLinks = document.querySelector('.nav-links-m')
    if (counter === 0) {
      navLinks.style.opacity = '1'
      navLinks.style.left = '0'
      navLinks.style.width = '100%'
      navLinks.style.transition = '1s'
      counterSet(1)
      console.log(counter)
    } else {
      navLinks.style.opacity = '0'
      navLinks.style.left = '-100%'
      navLinks.style.width = '0'
      navLinks.style.transition = '1s'
      counterSet(0)
      console.log(counter)
    }
  }

  return (
    <div className="App">
        <Header counter={counter} toggleMenu={toggleMenu}></Header>
        <Body></Body>
        <Carousel></Carousel>
        <Footer></Footer>
    </div>
  )
}

export default App
