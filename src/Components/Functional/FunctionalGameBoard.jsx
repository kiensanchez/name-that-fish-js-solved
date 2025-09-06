import "./styles/game-board.css";
import { useState } from "react";
import { initialFishes } from "../Shared/Fishes";

export function FunctionalGameBoard({
  totalCount,
  setCorrectCount,
  setIncorrectCount,
}) {
  const [answerInput, setAnswerInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answerInput.toLowerCase() === initialFishes[totalCount].name) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
    setAnswerInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img
          src={initialFishes[totalCount].url}
          alt={initialFishes[totalCount].name}
        />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={answerInput}
          onChange={(e) => setAnswerInput(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
