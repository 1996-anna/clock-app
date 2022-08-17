import "./Clock.css";
import {useState} from "react";

function Clock() {

    const now = new Date().toLocaleTimeString();
    const [newTime, setNewTime] = useState(now);
    const [darkMode, setDarkMode] = useState(false);
     
    function updateTime() {
        let time = new Date().toLocaleTimeString(); 
        setNewTime(time)
    }

    function handleClick(){
        setDarkMode((prevValue)=>{
            if (prevValue === true) {
                return false
            } else {
                return true
            }
        })
    }

    setInterval(updateTime, 1000)

    return (
        <div className="clock-wrapper" style={darkMode ? {backgroundColor:"#15133C"} : null}>
            <div className="toggle-wrapper">
                <p style={darkMode ? {left:"30px"} : {left:"0px"}} className="toggle" onClick={handleClick}></p>
            </div>
            <h1 className="clock">{newTime}</h1>
        </div>
    )
 
}

export default Clock;