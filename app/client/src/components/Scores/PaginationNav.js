import React from "react";
import PropTypes from "prop-types";

const PaginationNav = ({ handlePageClick, handlePageNav, pages }) => (
  <nav style={{ width: "fit-content" }} className="mx-auto">
    <ul className="pagination">
      <li className="page-item">
        <button onClick={handlePageNav} className="page-link">
          Previous
        </button>
      </li>
      {pages.map(p => (
        <li className="page-item" key={p}>
          <button onClick={handlePageClick} className="page-link">
            {p}
          </button>
        </li>
      ))}
      <li className="page-item">
        <button onClick={handlePageNav} className="page-link">
          Next
        </button>
      </li>
    </ul>
  </nav>
);

PaginationNav.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  handlePageNav: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired
};

export default PaginationNav;
