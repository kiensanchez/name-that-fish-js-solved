import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({
  correctCount,
  incorrectCount,
  answersLeft,
  totalCount,
}) {
  return (
    <div
      id="score-board"
      style={totalCount === 4 ? { display: "none" } : { display: "default" }}
    >
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
