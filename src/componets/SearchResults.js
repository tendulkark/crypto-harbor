import { Table } from "antd";
import React from "react";

const SearchResults = ({ results }) => {
  // console.log("results", results);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
    },
    {
      title: "Rank",
      dataIndex: "market_cap_rank",
    },
  ];
  return (
    <div className="search-results">
      <div className="search-values">
        {results.length > 0 && (
          <Table
            dataSource={results}
            columns={columns}
            pagination={false}
            className="searchresults-table"
          ></Table>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
