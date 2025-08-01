import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [totalCount, setTotalCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState([
    "trout",
    "salmon",
    "tuna",
    "shark",
  ]);

  return (
    <>
      <FunctionalScoreBoard
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        totalCount={totalCount}
        answersLeft={answersLeft}
      />
      <FunctionalGameBoard
        setTotalCount={setTotalCount}
        totalCount={totalCount}
        setCorrectCount={setCorrectCount}
        correctCount={correctCount}
        setIncorrectCount={setIncorrectCount}
        incorrectCount={incorrectCount}
        answersLeft={answersLeft}
        setAnswersLeft={setAnswersLeft}
      />
      {totalCount === 4 && (
        <FunctionalFinalScore
          totalCount={totalCount}
          correctCount={correctCount}
        />
      )}
    </>
  );
}
