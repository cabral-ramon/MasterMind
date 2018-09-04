import React, { Component } from "react";
import { connect } from "react-redux";
import {
  generateCode,
  isPlayValid,
  checkMatches,
  isWinningPlay,
  getScore
} from "../../utils/gameUtils";
import UserInputIndex from "../UserInputKeys/UserInputIndex";
import Feedback from "../Feedback/Feedback";
import PlayBox from "../PlayBox/PlayBox";
import Button from "../Buttons/Button";
import GameOver from "../Modals/GameOver";
import Key from "../Feedback/Key";
import { addScore } from "../../actions/scoreActions";

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
      fromIndex: null,
      gameOver: false,
      won: false,
      player: "",
      score: 0,
      timeStart: 0
    };
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentWillMount() {
    let player = window.localStorage.getItem("player");
    this.setState({ code: generateCode(), player, timeStart: Date.now() });
  }

  clearBoard() {
    this.setState({ userInput: [null, null, null, null], feedback: [] });
  }

  handlePlay() {
    const { userInput, code, turns, timeStart, player } = this.state;

    if (!isPlayValid(userInput)) {
      alert("invalid play");
      return;
    }

    const result = checkMatches(code, userInput);
    if (isWinningPlay(result.matches)) {
      let score = getScore(timeStart, turns);
      this.setState({ gameOver: true, won: true, score }, () => {
        const newScore = { player, score };
        this.props.addScore(newScore);
      });
    } else {
      this.setState(prevState => {
        if (prevState.turns === 1) {
          return {
            feedback: result.matches,
            turns: prevState.turns - 1,
            gameOver: true,
            won: false
          };
        }
        return { feedback: result.matches, turns: prevState.turns - 1 };
      });
    }
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
    const {
      code,
      turns,
      userInput,
      feedback,
      gameOver,
      won,
      player,
      score
    } = this.state;
    return (
      <div>
        {gameOver && (
          <GameOver won={won} code={code} score={score} player={player} />
        )}
        <Key />
        <div className="text-center">
          <h4>{turns} turns left: </h4>
        </div>
        <div>
          <div className="mx-auto mb-5 button-wrapper">
            <Button
              className="btn btn-danger mr-2"
              action={this.clearBoard.bind(this)}
              text="clear"
            />
            <Button
              className="btn btn-primary mr-2"
              action={this.handlePlay.bind(this)}
              text="play"
            />
          </div>
          <PlayBox
            userInput={userInput}
            handleDragOver={this.handleDragOver}
            handleDrag={this.handleDrag}
            handleDrop={this.handleDrop}
          />
          <Feedback feedback={feedback} />
          <UserInputIndex handleDrag={this.handleDrag} userInput={userInput} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addScore: score => dispatch(addScore(score))
});

export default connect(
  null,
  mapDispatchToProps
)(GameBoard);
