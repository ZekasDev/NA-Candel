import "./BaseButton.scss";
export default function BaseButton({ text }) {
  return (
    <div className="button-container">
      <span className="button-text">{text}</span>
    </div>
  );
}
