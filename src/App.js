import { useState } from "react";

function App()
{
  return (
    <>
    <div className="bg-dark text-primary p-3">
    <h1 className="bg-info text-primary p-3">Counter App1</h1>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque expedita dolor tempore consequatur magni fugit necessitatibus architecto, recusandae aliquid, iure eum molestiae repellendus placeat maxime! Similique alias architecto voluptates explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero modi explicabo facere! Error, dolor quo ipsam expedita harum fuga consectetur necessitatibus voluptas illum excepturi, repellat consequatur asperiores aut deserunt. </div>
    <CounterApp> </CounterApp>
    <hr />
    <h1 className="bg-info text-primary p-3">Counter App2</h1>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque expedita dolor tempore consequatur magni fugit necessitatibus architecto, recusandae aliquid, iure eum molestiae repellendus placeat maxime! Similique alias architecto voluptates explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero modi explicabo facere! Error, dolor quo ipsam expedita harum fuga consectetur necessitatibus voluptas illum excepturi, repellat consequatur asperiores aut deserunt. </div>
    <CounterApp> </CounterApp>
    </div>
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
    <h1>{counter}{""}</h1>
    <br />
    <input type="button" value="&#128077;" onClick={LikeMeAction} />
    </>
  );
}

export default App;