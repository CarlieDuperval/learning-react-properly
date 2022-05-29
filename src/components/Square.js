import '../index.css';
import { useState } from 'react';

const Square = () => {

    const [value, setVAlue] = useState("")

    const handelClick = () => {
        setVAlue ("X")
    }
    return <button className="square" onClick={ () => handelClick()}>{value}</button>;
  };


  export default Square;