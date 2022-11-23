import React, { useState, useEffect } from "react";





const Greeting = (props) => {
  const [name, setName] = useState(props.name);
  useEffect(() => {
    setTimeout(() => {
      setName("Alfonsina");
    }, 3000);
  }, []);
  return (
    <div>
      <span>Hi {name} !</span>
      <span>Hi {props.name} !</span>

    </div>
  );
};




export default Greeting;
