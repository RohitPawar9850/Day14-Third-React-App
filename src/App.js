import { useState } from "react";

function App()
{
  return (
    <>
    <h1>Counter App</h1>
    <CounterApp> </CounterApp>
    </>
  );
}

function CounterApp()
{
  // let list = useState(1);
  // let [counter,setCounter] = list;
  let [counter,setCounter] = useState(1); //stateful + DOM opr

  let LikeMeAction = () => {
    counter = counter + 1 ;
    console.log(counter);
    setCounter(counter);
  };
  return (
    <>
    <h1>{counter}</h1>
    <h1>{counter}</h1>
    <div>{counter}</div>
    <br />
    <input type="button" value="like me" onClick={LikeMeAction} />
    </>
  );
}

export default App;