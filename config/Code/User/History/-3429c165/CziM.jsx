import { useState, useEffect, useRef } from "react";
import "./index.css";
import { Link, Element } from 'react-scroll';

import SliderVertical from "./components/scrollspy";
import VerticalSlider from "./components/smoothcolor";
import VerticalSlider2 from "./components/verticalslide";
import Slider from "./components/slider2";
import Hs from "./components/horizontal";
import Efectsnap from "./components/efectsnap";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
     <div className="App">
       {/* <SliderVertical /> */}
       {/* <VerticalSlider /> */}
       {/* <VerticalSlider2 /> */}
       {/* <Slider /> */}
       {/* <Hs /> */}
       {/* <Efectsnap /> */}
     </div>
  );
 }

export default App;
