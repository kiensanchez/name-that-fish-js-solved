import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../Shared/Fishes";
export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const totalCount = correctCount + incorrectCount;
  const fishes = initialFishes.map((fish) => fish.name);
  const answersLeft = fishes.slice(totalCount);

  return (
    <>
      {totalCount < 4 && (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            totalCount={totalCount}
            setCorrectCount={setCorrectCount}
            setIncorrectCount={setIncorrectCount}
          />
        </>
      )}

      {totalCount === 4 && (
        <FunctionalFinalScore
          totalCount={totalCount}
          correctCount={correctCount}
        />
      )}
    </>
  );
}
