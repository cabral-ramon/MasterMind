import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchScores } from "../../actions/scoreActions";

class TopScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    };
  }

  componentDidMount() {
    this.props.fetchScores();
  }

  componentWillReceiveProps({ scores }) {
    this.setState({ scores });
  }
  render() {
    debugger;
    const { scores } = this.state;
    return (
      <table>
        <tr>
          <th>Username</th>
          <th>Score</th>
        </tr>
        <tbody>
          {scores.map(score => (
            <tr>
              <td>{score.username}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  scores: state.scores
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchScores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopScores);
