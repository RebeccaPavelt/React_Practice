import data from "./data";

export default function Accordion() {
  return (
    <div>
      <div>Accordion</div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
