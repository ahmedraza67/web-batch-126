import { useEffect, useState } from "react";

function App() {
  let num = 288.838;
  const [count, setCount] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let token = "myToken";

    let interval = setInterval(() => {
      setCount(count + 1);
      console.log(count);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [loggedIn]);

  // console.log(Math.round(num));
  // console.log(Math.ceil(num));
  // console.log(Math.floor(num));

  // console.log(Math.random().toFixed(2) * 100);

  return (
    <div>
      <h1>Hello {count} </h1>
      <h2>{loggedIn ? "hello user" : "please click login"}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn == true ? "Logout" : "login"}
      </button>
    </div>
  );
}

export default App;
