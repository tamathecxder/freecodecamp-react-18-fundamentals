import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <Button />
      <Paragraph />
    </div>
  );
};

const Button = () => {
  return <button type="button">Button</button>;
};

const Paragraph = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem.
    </p>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);