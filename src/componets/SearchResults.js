import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((result, id) => {
        return (
          <div key={id} className="search-values">
            <span>
              Name: <span className="name">{result.name}</span> &nbsp;
            </span>
            <span>
              &nbsp;Symbol: <span className="symbol">{result.symbol} </span>
              &nbsp;
            </span>
            <span>
              Rank: &nbsp;<span className="rank">{result.market_cap_rank}</span>{" "}
              &nbsp;
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
