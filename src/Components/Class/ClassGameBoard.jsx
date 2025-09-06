import { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "../Shared/Fishes";

export class ClassGameBoard extends Component {
  state = {
    answerInput: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { answerInput } = this.state;
    const { totalCount, setCorrectCount, setIncorrectCount } = this.props;

    if (answerInput.toLowerCase() === initialFishes[totalCount].name) {
      setCorrectCount(1);
    } else {
      setIncorrectCount(1);
    }
    this.setState({ answerInput: "" });
  };

  render() {
    const { answerInput } = this.state;
    const { totalCount } = this.props;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img
            src={initialFishes[totalCount].url}
            alt={initialFishes[totalCount].name}
          />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={answerInput}
            onChange={(e) => this.setState({ answerInput: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
