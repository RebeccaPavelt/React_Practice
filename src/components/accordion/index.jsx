import data from "./data";
import { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <div>Accordion</div>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
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
