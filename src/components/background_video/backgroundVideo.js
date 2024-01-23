import React from 'react'
import video from "../../ressources/Outer Wilds Solar System Timelapse HD.mp4"
import style from "./backgroundVideo.module.css"

export default function BackgroundVideo({children}) {
  return (
    <div className={style.backgroundVideoContainer}>
      <video src={video} className={style.backgroundVideo} loop muted autoPlay>
          {children}
      </video>
    </div>
  )
}
