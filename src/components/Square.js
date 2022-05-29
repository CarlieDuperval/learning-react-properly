import '../index.css';
import { useState } from 'react';

const Square = () => {
// set useState as an empty string as his default value
    const [value, setVAlue] = useState("")
// Set the value to X when you click
    const handelClick = () => {
        setVAlue ("X")
    }
    // return the button 
    return <button className="square" onClick={ () => handelClick()}>{value}</button>;
  };


  export default Square;