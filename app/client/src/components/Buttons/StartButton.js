import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const prevPlayer = () => {
  const prev = window.localStorage.getItem("player");
  if (prev) return prev;
  return false;
};

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: ""
    };
  }

  componentWillMount() {
    if (prevPlayer()) {
      this.setState({ currentPlayer: prevPlayer() });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    window.localStorage.setItem("player", this.state.currentPlayer);
    this.props.history.push("/game");
  }
  render() {
    const { currentPlayer } = this.state;
    return (
      <div>
        <form
          className="form-inline mx-auto"
          style={{ width: "fit-content" }}
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div className="form-group mb-2 mr-2">
            <label htmlFor="currentPlayer" className="form-label mr-2">
              Enter your name:
            </label>
            <input
              id="currentPlayer"
              type="text"
              name="currentPlayer"
              value={currentPlayer}
              onChange={this.handleChange.bind(this)}
              className="form-control"
            />
          </div>
          <button className="btn btn-dark mb-2">{this.props.text}</button>
        </form>
      </div>
    );
  }
}

StartButton.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default withRouter(StartButton);
