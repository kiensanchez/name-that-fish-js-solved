import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../Shared/Fishes";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  setCorrectCount = (count) => {
    this.setState((prevState) => ({
      correctCount: prevState.correctCount + count,
    }));
  };

  setIncorrectCount = (count) => {
    this.setState((prevState) => ({
      incorrectCount: prevState.incorrectCount + count,
    }));
  };

  render() {
    const totalCount = this.state.correctCount + this.state.incorrectCount;
    const fishes = initialFishes.map((fish) => fish.name);
    const answersLeft = fishes.slice(totalCount);

    return (
      <>
        {totalCount < 4 && (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              totalCount={totalCount}
              setCorrectCount={this.setCorrectCount}
              setIncorrectCount={this.setIncorrectCount}
            />
          </>
        )}
        {totalCount === 4 && (
          <ClassFinalScore
            totalCount={totalCount}
            correctCount={this.state.correctCount}
          />
        )}
      </>
    );
  }
}

// state = {
//   incorrectCount: 0,
//   correctCount: 0,
//   totalCount: 0,
//   answersLeft: ["trout", "salmon", "tuna", "shark"],
// };
