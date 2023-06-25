import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return <h1>Hi, Mom!</h1>
}

const container = document.getElementById('id');
const root = ReactDOM.createRoot(container);

root.render(<Greeting/>);

export default Greeting;