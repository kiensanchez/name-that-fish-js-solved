import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

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

export class ClassGameBoard extends Component {
  state = {
    answerInput: "",
    index: 0,
  };
  render() {
    const { answerInput, index } = this.state;
    const nextFishToName = initialFishes[index];
    const { updateState } = this.props;
    const { totalCount, incorrectCount, correctCount, answersLeft } =
      this.props.state;
    return (
      <div
        id="game-board"
        style={
          this.props.state.totalCount === 4
            ? { display: "none" }
            : { display: "default" }
        }
      >
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.setState(index === 3 ? { index: 0 } : { index: index + 1 });
            answerInput === nextFishToName.name
              ? updateState(
                  incorrectCount,
                  correctCount + 1,
                  totalCount + 1,
                  answersLeft.filter((item) => item !== nextFishToName.name)
                )
              : updateState(
                  incorrectCount + 1,
                  correctCount,
                  totalCount + 1,
                  answersLeft.filter((item) => item !== nextFishToName.name)
                );
            this.setState({ answerInput: "" });
          }}
        >
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
