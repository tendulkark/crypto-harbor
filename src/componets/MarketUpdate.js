import { Table } from "antd";
import { useEffect, useState } from "react";

const MarketUpdate = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&locale=en`;

  useEffect(() => {
    const fetchRecords = () => {
      fetch(url).then((res) => {
        res.json().then((response) => {
          console.log(response);
          setData(response);
        });
      });
    };
    fetchRecords();
  }, [url]);

  const columns = [
    {
      title: "Coin",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "current_price",
    },
    {
      title: "24h Change",
      dataIndex: "price_change_percentage_24h",
    },
    {
      title: "Market Cap",
      dataIndex: "market_cap",
    },
  ];

  const transformedData = data.map((item) => ({
    ...item,
    name: item.name,
    current_price: `₹ ${item.current_price.toLocaleString()}`,
    price_change_percentage_24h: `${item.price_change_percentage_24h.toFixed(
      2
    )}%`,
    market_cap: `₹ ${item.market_cap.toLocaleString()}`,
  }));

  const pageChange = (i) => {
    console.log("Current Page", i);
    setCurrentPage(i);
  };

  const paginations = [];

  for (let i = 1; i <= 5; i++) {
    paginations.push(
      <button
        type="button"
        key={i}
        onClick={() => pageChange(i)}
        className={i === currentPage ? "activePage" : ""}
      >
        {i}
      </button>
    );
  }

  console.log("Market Update: ", data);
  return (
    <>
      <section className="market" id="market">
        <div className="container">
          <h1>Market Update</h1>
          <Table
            columns={columns}
            dataSource={transformedData}
            pagination={false}
          ></Table>
          <div className="pagination">{paginations}</div>
        </div>
      </section>
    </>
  );
};

export default MarketUpdate;
