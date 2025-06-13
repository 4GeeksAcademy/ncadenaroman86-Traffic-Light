const { useState } = React;

function TrafficLight() {
  // single piece of state that tracks which light is ON
  const [color, setColor] = useState("red");

  // helper to render each lamp
  const Lamp = (name) => (
    <span
      className={`bulb ${name} ${color === name ? "on" : ""}`}
      onClick={() => setColor(name)}
    />
  );

  return (
    <div className="traffic-light">
      {Lamp("red")}
      {Lamp("yellow")}
      {Lamp("green")}
    </div>
  );
}

// Mount into the DOM ⤵
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
