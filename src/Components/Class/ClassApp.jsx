import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectCount: 0,
      correctCount: 0,
      totalCount: 0,
      answersLeft: ["trout", "salmon", "tuna", "shark"],
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(newIncorrectCount, newCorrectCount, newTotalCount, newArray) {
    this.setState({
      incorrectCount: newIncorrectCount,
      correctCount: newCorrectCount,
      totalCount: newTotalCount,
      answersLeft: newArray,
    });
  }
  render() {
    return (
      <>
        <>
          <ClassScoreBoard state={this.state} />
          <ClassGameBoard state={this.state} updateState={this.updateState} />
        </>
        {this.state.totalCount === 4 && <ClassFinalScore state={this.state} />}
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
