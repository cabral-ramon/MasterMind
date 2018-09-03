import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchScores, searchScores } from "../../actions/scoreActions";
import PaginationNav from "./PaginationNav";

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
      page: 1,
      totalPages: 0,
      display: 10,
      index: 0,
      query: ""
    };
  }

  componentDidMount() {
    this.props.fetchScores();
  }

  componentWillReceiveProps({ scores }) {
    this.setState({
      scores,
      totalPages: Math.ceil(scores.length / this.state.display)
    });
  }

  handlePageClick(e) {
    e.preventDefault();
    const page = parseInt(e.currentTarget.innerHTML, 10);
    const index = page * 10 - 10;
    this.setState({ page, index });
  }

  handlePageNav(e) {
    e.preventDefault();
    const { page, totalPages } = this.state;
    const type = e.currentTarget.innerHTML;
    if (type === "Previous") {
      if (page !== 1) {
        this.setState(prevState => {
          const newPage = prevState.page - 1;
          const index = newPage * 10 - 10;
          return { page: newPage, index };
        });
      }
    } else {
      if (page !== totalPages) {
        this.setState(prevState => {
          const newPage = prevState.page + 1;
          const index = newPage * 10 - 10;
          return { page: newPage, index };
        });
      }
    }
  }

  handleChange(e) {
    this.setState({ query: e.currentTarget.value });
  }

  handleSeach(e) {
    e.preventDefault();
    this.props.searchScores(this.state.query);
  }

  render() {
    const { scores, page, display, index, totalPages } = this.state;
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return (
      <div>
        <h1>Scores</h1>
        <form className="form-inline mb-2">
          <div className="form-group mr-2">
            <input
              value={this.state.query}
              onChange={this.handleChange.bind(this)}
              name="query"
              type="text"
              className="form-control"
            />
          </div>
          <button
            onClick={this.handleSeach.bind(this)}
            className="btn btn-primary"
          >
            Search
          </button>
        </form>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Username</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.slice(index, page * display).map((score, idx) => (
              <tr key={score.id}>
                <th scope="row">{idx + index + 1}</th>
                <td>{score.player}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationNav
          handlePageClick={this.handlePageClick.bind(this)}
          handlePageNav={this.handlePageNav.bind(this)}
          pages={pages}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  scores: state.scores
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchScores()),
  searchScores: query => dispatch(searchScores(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scores);
