import React, { Component } from "react";
import UserInputKey from "./UserInputKey";
import PropTypes from "prop-types";
import "./UserInput.css";

class UserInputIndex extends Component {
  render() {
    const { userInput } = this.props;
    const inputKeys = [];
    for (let i = 0; i < 10; i++) {
      inputKeys.push(i);
    }
    return (
      <div className="inputContainer mt-3">
        {inputKeys.map(key => {
          if (userInput.includes(key)) {
            return <UserInputKey disabled={true} key={key} num={key} />;
          } else {
            return (
              <UserInputKey
                handleDrag={this.props.handleDrag}
                key={key}
                num={key}
              />
            );
          }
        })}
      </div>
    );
  }
}

UserInputIndex.propTypes = {
  handleDrag: PropTypes.func.isRequired,
  userInput: PropTypes.array.isRequired
};

export default UserInputIndex;
