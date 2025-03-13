import data from "./data";
import { useState } from "react";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelections, setEnableMultiSelections] = useState(false);
  const [openItems, setOpenItems] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function toggleButton() {
    setEnableMultiSelections(!enableMultiSelections);
  }

  function handleMultiSelections(getCurrentId) {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(getCurrentId)
        ? prevOpenItems.filter((id) => id !== getCurrentId)
        : [...prevOpenItems, getCurrentId]
    );
  }

  return (
    <div className="wrapper">
      <h2>ACCORDION</h2>
      <button type="button" className="button" onClick={toggleButton}>
        {enableMultiSelections
          ? "Enable Single Selection"
          : "Enable Multiple Selections"}
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
              {enableMultiSelections ? (
                openItems.includes(item.id) ? (
                  <div>{item.answer}</div>
                ) : null
              ) : selected === item.id ? (
                <div>{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
