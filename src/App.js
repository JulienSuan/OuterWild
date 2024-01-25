import React from "react";
import BackgroundVideo from './components/background_video/backgroundVideo';
import Filter from "./components/filter/Filter";
import logo from "./ressources/logo.png"
import "./App.css"
import GameEvents from "./components/events/GameEvents";


export default function App() {
  return (
    <>
    <div className="container" >
    <GameEvents></GameEvents>
      <div className="contheader" >
        <img src={logo} width={150}  />
        <h1>OUTER <br /><span>WILDS</span></h1>
      </div>
      <Filter>
      </Filter>
        <BackgroundVideo>
        </BackgroundVideo>
    </div>
    </>
  );
}
