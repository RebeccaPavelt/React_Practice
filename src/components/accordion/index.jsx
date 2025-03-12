import data from "./data";
import { useState } from "react";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <h2>ACCORDION</h2>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={() => handleSingleSelection(item.id)}
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>{" "}
              {selected === item.id ? <div>{item.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
