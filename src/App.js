import React from "react";
import BackgroundVideo from './components/background_video/backgroundVideo';
import Filter from "./components/filter/Filter";
import "./App.css"


export default function App() {
  return (
    <div className="container">
      <Filter>
      </Filter>
        <BackgroundVideo>
        </BackgroundVideo>
    </div>
  );
}
