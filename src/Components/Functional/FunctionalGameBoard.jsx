import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalGameBoard({
  setTotalCount,
  setCorrectCount,
  setIncorrectCount,
  totalCount,
  correctCount,
  incorrectCount,
  answersLeft,
  setAnswersLeft,
}) {
  const [index, setIndex] = useState(0);
  const nextFishToName = initialFishes[index];
  const [answerInput, setAnswerInput] = useState("");

  return (
    <div
      id="game-board"
      style={totalCount === 4 ? { display: "none" } : { display: "default" }}
    >
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          index === 3 ? setIndex(0) : setIndex(index + 1);
          setTotalCount(totalCount + 1);
          answerInput === nextFishToName.name
            ? setCorrectCount(correctCount + 1)
            : setIncorrectCount(incorrectCount + 1);
          setAnswersLeft(
            answersLeft.filter((item) => item !== nextFishToName.name)
          );
          setAnswerInput("");
        }}
      >
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
