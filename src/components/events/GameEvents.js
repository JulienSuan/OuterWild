import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import './GameEvents.css'


const EVENTS = [
  {time: "0:00", text: "Le cycle commence avec le tir et l'explosion de l'Orbital Probe Cannon"},
  {time: "2:00", text: "Le sable commence à couler vers Ember Twin"},
  {time: "3:40", text: "L'Intrus devient accessible"},
  {time: "4:20", text: "L'Intrus devient inaccessible"},
  {time: "5:15", text: "Le pad de téléportation de la Station Solaire devient accessible"},
  {time: "6:40", text: "Echoes of the Eye: L'étranger ouvre ses voiles solaires, fissurant le barrage"},
  {time: "7:50", text: "Le pad de téléportation de la Sablière Rouge devient accessible"},
  {time: "11:30", text: "La Station Solaire est détruite"},
  {time: "11:40", text: "L'Intrus devient accessible"},
  {time: "12:20", text: "L'Intrus devient inaccessible"},
  {time: "13:00", text: "Echoes : Le barrage se rompt"},
  {time: "20:00", text: "L'interloper percute le Soleil en expansion"},
  {time: "20:20", text: "Le sable cesse de couler vers Ember Twin"},
  {time: "20:30", text: "Echoes : La tour de l'île tombe"},
  {time: "20:35", text: "La chanson End Times se joue"},
  {time: "22:00", text: "Kaboom"}
]






const GameEvents = () => {

  const bar = useRef(null)
  const contblabla = useRef(null)
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [eventsInQ, setEventsInQ] = useState([ {time: "0:00", text: "Le cycle commence avec le tir et l'explosion de l'Orbital Probe Cannon"},]);
  
   
    
    useEffect(() => {
        const timerID = setInterval(() => {
  
          setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
          
          const currentEvent = EVENTS.find(
            (event) => getTimeInSeconds(event.time) === (totalSeconds + 1)
            );
            
            if (currentEvent) {
              setEventsInQ((prevEvents) => [...prevEvents, currentEvent]);

            }
            
            if (totalSeconds >= 1320) {
              clearInterval(timerID);
            }
            bar.current.style.width = (totalSeconds / 1320 * 100 + "%")
            
          
        }, 75);

         
        if (totalSeconds >= 1320) {
          clearInterval(timerID);
        }
  
      return () => {
        
        clearInterval(timerID);
      };
    }, [totalSeconds]);
  

    const getTimeInSeconds = (time) => {
      const [minutes, seconds] = time.split(':');
      return parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
    };
  
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    const formatTime = (value) => (value < 10 ? `0${value}` : value);
  
    return (
      <motion.div layout="height" style={{overflow: "hidden"}}  className='game_event_container'>
        <p id="txt">{formatTime(minutes)}:{formatTime(seconds)}</p>
        <div style={{overflow: "hidden"}}  className="gameventscont">
          <AnimatePresence>

          {Array.isArray(eventsInQ) ? eventsInQ.map((event) => {
            if (event.text.includes("Echoes")) {
              return(
                <motion.div key={event.time}  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}ref={contblabla} className='contalaba'>
                  <p  className='game_event_timer_echo'>{event.time}</p>
                  <p >  {event.text}</p>
                </motion.div>
              )
            } else {
              
            }
            return (
              <motion.div key={event.time}  initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} ref={contblabla} className='contalaba'>
                <p  className='game_event_timer'>{event.time}</p>
                <p >  {event.text}</p>
            </motion.div>
            )
          }
          ) : null}
           </AnimatePresence>
        </div>
        <div className="event_progess_bar_container">
            {EVENTS.map(res => {
              return (
                <div key={res.time} className="event_progess_bar_bar" style={{left: (getTimeInSeconds(res.time) / 1320) * 100 + "%"}}>
                  
                </div>
              )
            })}
          <div  ref={bar} className="event_progess_bar">
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default GameEvents;