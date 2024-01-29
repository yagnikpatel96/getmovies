import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// temp code
// import StarRating from "./components/StarRating";
// import TextExpander from "./components/TextExpander";
// import "./text-expander.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    {/* <TextExpander /> */}
  </React.StrictMode>
);
