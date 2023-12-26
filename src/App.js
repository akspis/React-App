import React from "react";
import ReactDOM from "react-dom/client";
import Headers from "./Components/Header";
import Body from "./Components/Body";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Headers />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
