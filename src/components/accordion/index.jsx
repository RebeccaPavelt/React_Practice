import data from "./data";
import { useState } from "react";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelections, setEnableMultiSelections] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function toggleButton() {
    setEnableMultiSelections(!enableMultiSelections);
  }

  function handleMultiSelections(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    setMultiple(copyMultiple);
  }

  return (
    <div className="wrapper">
      <h2>ACCORDION</h2>
      <button type="button" className="button" onClick={toggleButton}>
        Enable Multiple Selections
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelections
                    ? () => handleMultiSelections(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span className="span">+</span>
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
