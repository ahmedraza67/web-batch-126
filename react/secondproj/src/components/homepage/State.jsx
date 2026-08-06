import React, { useState } from "react";

function State() {
  //   let count = 1;
  let [count, setCount] = useState(1);
  const [name, setName] = useState("ahmed");
  const [inpVal, setInpVal] = useState("hello");

  function increment() {
    setCount(++count);
    if (name == "ahmed") {
      setName("raza");
    } else if (name == "raza") {
      setName("hello");
    } else {
      setName("elseName");
    }
  }
  return (
    <div>
      {count}

      <button onClick={increment}>Increment {count}</button>
      <input
        type="text"
        name=""
        id=""
        value={inpVal}
        onChange={(e) => {
          setInpVal(e.target.value);
        }}
      />

      <h1>{inpVal}</h1>
      <h1>
        hello {name} here is counter {count}
      </h1>
    </div>
  );
}

export default State;
