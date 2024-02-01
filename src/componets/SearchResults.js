import React from "react";
import { Link, NavLink } from "react-router-dom";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((result, id) => {
        return (
          <div key={id} className="search-values">
            <span className="name">{result.name} &nbsp;</span>
            <span className="symbol">
              &nbsp;
              {result.symbol} &nbsp;
            </span>
            <span className="rank">&nbsp;{result.market_cap_rank} &nbsp;</span>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
