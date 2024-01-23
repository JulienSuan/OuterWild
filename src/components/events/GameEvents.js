import React, { useEffect, useRef, useState } from 'react'
import './GameEvents.css'



const EVENTS = [
    {time: "0:00", text: "The loop begins with the Orbital Probe Cannon firing and exploding"},
    {time: "1:28", text: "ptminsker end his 'Destroy SpaceTime' speedrun"},
    {time: "2:00", text: "Sand starts flowing to Ember Twin"},
    {time: "3:40", text: "The interloper becomes accessible"},
    {time: "4:20", text: "The interloper becomes inaccessible"},
    {time: "5:15", text: "The Sun Station warp pad becomes accessible"},
    {time: "6:40", text: "Echoes of the Eye: The Stranger opens its solar sails, cracking the dam"},
    {time: "7:42", text: "ptminsker end his any% speedrun"},
    {time: "7:50", text: "The Ash Twin warp pad becomes accessible"},
    {time: "11:30", text: "The Sun Station is destroyed"},
    {time: "11:40", text: "The Interloper becomes accessible"},
    {time: "12:20", text: "The Interloper becomes inaccessible"},
    {time: "13:00", text: "Echoes: The dam breaks"},
    {time: "20:00", text: "The Interloper crashes into the expanding Sun"},
    {time: "20:20", text: "Sand stops flowing to Ember Twin"},
    {time: "20:30", text: "Echoes: The Island Tower falls over"},
    {time: "20:35", text: "The song End Times plays"},
    {time: "22:00", text: "Kaboom"}
]





const GameEvents = () => {

  const bar = useRef(null)
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [eventsInQ, setEventsInQ] = useState([ {time: "0:00", text: "The loop begins with the Orbital Probe Cannon firing and exploding"},]);
  
    useEffect(() => {
        const timerID = setInterval(() => {
  
          setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
          
          // Ajoutez une logique ici pour déterminer l'affichage des événements
          const currentEvent = EVENTS.find(
            (event) => getTimeInSeconds(event.time) === (totalSeconds + 1)
            );
            
            if (currentEvent) {
              // Accumulez l'événement dans le tableau
              setEventsInQ((prevEvents) => [...prevEvents, currentEvent]);
            }
            
            if (totalSeconds >= 1320) {
              clearInterval(timerID);
              // Vous pouvez ajouter une logique ici pour indiquer que le timer est arrivé à 22:00
            }
            bar.current.style.width = (totalSeconds / 1320 * 100 + "%")
            
          
        }, 1000);
  
      return () => {
        clearInterval(timerID);
      };
    }, [eventsInQ, totalSeconds]);
  

    const getTimeInSeconds = (time) => {
      const [minutes, seconds] = time.split(':');
      return parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
    };
  
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    const formatTime = (value) => (value < 10 ? `0${value}` : value);
  
    return (
      <div className='game_event_container'>
        <p id="txt">{formatTime(minutes)}:{formatTime(seconds)}</p>
        <div className="gameventscont">
          {Array.isArray(eventsInQ) ? eventsInQ.map((event) => {
            if (event.text.includes("Echoes")) {
              return(
                <div className='contalaba'>
                  <p className='game_event_timer_echo'>{event.time}</p>
                  <p key={event.time}>  {event.text}</p>
                </div>
              )
            } else {
              
            }
            return (
              <div className='contalaba'>
                <p className='game_event_timer'>{event.time}</p>
                <p key={event.time}>  {event.text}</p>
            </div>
            )
          }
          ) : null}
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
      </div>
    );
  };
  
  export default GameEvents;