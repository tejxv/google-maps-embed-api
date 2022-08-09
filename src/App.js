import logo from "./logo.svg";
import { useState } from "react";
import graviti from "./GravitiLogo.png";
import "./App.css";

function App() {
  const [origin, setOrigin] = useState("");
  const [dest, setDest] = useState("");
  const [URL, setURL] = useState(
    "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBOZnc8KJAxyQVLkyGRGci7vpfXHXukuXE  + &origin=Queens + NYC + &destination=Bay ridge + New York City + &avoid=tolls|highways"
  );
  console.log(process.env.REACT_APP_KEY);

  const handleSubmit = () => {
    if (dest && origin) {
      setURL(
        `${"https://www.google.com/maps/embed/v1/directions?key=AIzaSyBOZnc8KJAxyQVLkyGRGci7vpfXHXukuXE"} + &origin=${origin} + &destination=${dest} + &avoid=tolls|highways`
      );
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <img src={graviti} className="logo" alt="logo" />
        </div>
        <div className="titleContainer">
          <p className="title">Let's calculate distance from Google maps</p>
        </div>
        <div className="inputFieldContainer">
          <div className="origin">
            <label> Origin</label>
            <input type="text" onChange={(e) => setOrigin(e.target.value)} />
          </div>
          <div className="origin">
            <label> Destination</label>
            <input type="text" onChange={(e) => setDest(e.target.value)} />
          </div>
        </div>
        <button type="button" className="CTA" onClick={handleSubmit}>
          {" "}
          Calculate
        </button>
        <div className="mapContainer">
          <iframe
            width="650"
            height="400"
            frameborder="0"
            style={{ border: 0 }}
            referrerpolicy="no-referrer-when-downgrade"
            src={URL}
            allowfullscreen
          ></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
