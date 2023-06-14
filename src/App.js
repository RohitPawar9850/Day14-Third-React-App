import { useState } from "react";

function App()
{
  return (
    <>
    <h1>String Demo</h1>
    <StringDemo></StringDemo>
    </>
  );
}

function StringDemo()
{
  let [title,SetTitle] =useState ("Hello World");
  let UpperCaseAction = () => {
    title = title.toUpperCase();
    console.log(title);
    SetTitle(title);

  };
  let LowerCaseAction = () => {
    title = title.toLowerCase();
    console.log(title);
    SetTitle(title);
  };

 return (
  <>
  <h1>{title}</h1>
  <input type="button" value="LowerCase" onClick={LowerCaseAction} />
  <input type="button" value="UpperCase" onClick={UpperCaseAction} />
  </>
 );
}

export default App;