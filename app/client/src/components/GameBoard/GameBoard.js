import React, { Component } from "react";
import { generateCode, isPlayValid, checkMatches } from "../../utils/gameUtils";
import UserInputIndex from "../UserInputKeys/UserInputIndex";
import Feedback from "../Feedback/Feedback";
import PlayBox from "../PlayBox/PlayBox";
import Button from "../Buttons/Button";
import "./gameBoardStyles.css";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: [],
      turns: 10,
      userInput: [null, null, null, null],
      inputTarget: null,
      dropTarget: null,
      feedback: [],
      fromIndex: null
    };
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentWillMount() {
    this.setState({ code: generateCode() });
  }

  clearBoard() {
    this.setState({ userInput: [null, null, null, null] });
  }

  handlePlay() {
    const { userInput, code } = this.state;

    if (!isPlayValid(userInput)) {
      alert("invalid play");
      return;
    }

    const result = checkMatches(code, userInput);
    this.setState(prevState => {
      return { feedback: result.matches, turns: prevState.turns - 1 };
    });
  }

  handleDragOver(e, idx) {
    e.preventDefault();
    this.setState({ dropTarget: idx });
  }

  handleDrag(e, num, index) {
    // if the tile is dragged from play box it will have an index
    this.setState({
      inputTarget: num,
      fromIndex: index === 0 || index ? index : null
    });
  }

  handleDrop(e) {
    const { dropTarget, inputTarget, userInput, fromIndex } = this.state;
    const newUserInput = userInput.splice(0, 4);

    //check if we need to perform a swap
    if (newUserInput[dropTarget] === null) {
      newUserInput[dropTarget] = inputTarget;
      newUserInput[fromIndex] = null;
    } else {
      const swapTarget = newUserInput[dropTarget];
      newUserInput[fromIndex] = swapTarget;
      newUserInput[dropTarget] = inputTarget;
    }
    this.setState({
      userInput: newUserInput,
      inputTarget: null,
      dropTarget: null,
      fromIndex: null
    });
    e.preventDefault();
  }

  render() {
    const { code, turns, userInput, feedback } = this.state;
    return (
      <div>
        <div>
          <h4>{turns} turns left: </h4>
          <ul>
            {code.map(el => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
        <Feedback feedback={feedback} />
        <div>
          <PlayBox
            userInput={userInput}
            handleDragOver={this.handleDragOver}
            handleDrag={this.handleDrag}
            handleDrop={this.handleDrop}
          />
          <Button action={this.clearBoard.bind(this)} text="clear" />
          <Button action={this.handlePlay.bind(this)} text="play" />
          <UserInputIndex handleDrag={this.handleDrag} userInput={userInput} />
        </div>
      </div>
    );
  }
}

export default GameBoard;
