import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchScores } from "../../actions/scoreActions";
import PropTypes from "prop-types";

class TopScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
      fetching: false
    };
  }

  componentDidMount() {
    this.setState({ fetching: true});
    this.props.fetchScores()
      .then( () => this.setState({ fetching: false }));
  }

  componentWillReceiveProps({ scores }) {
    this.setState({ scores });
  }

  render() {
    const { scores, fetching } = this.state;
    const { style } = this.props;
    if (fetching) {
      return <p>Loading...</p>
    }
    return (
      <div style={style ? this.props.style : null}>
        <h1>Top Scores</h1>
        <a href="/scores" className="btn btn-link">
          View all scores
        </a>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Username</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.slice(0, 10).map((score, index) => (
              <tr key={score.id}>
                <th scope="row">{index + 1}</th>
                <td>{score.player}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  scores: state.scores
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchScores())
});

TopScores.propTypes = {
  fetchScores: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopScores);
