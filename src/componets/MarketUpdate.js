import { Table } from "antd";
import { useEffect, useState } from "react";

const MarketUpdate = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&locale=en`;

  useEffect(() => {
    // const fetchRecords = () => {
    //   setLoading(true);
    //   fetch(url).then((res) => {
    //     res.json().then((response) => {
    //       console.log(response);
    //       setData(response);
    //       setLoading(false);
    //     });
    //   });
    // };
    const fetchRecords = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
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
      // className: "price_of_the_coin",
    },
    {
      title: "24h Change",
      // dataIndex: "price_change_percentage_24h",
      // className: (record) => {
      //   console.log("price : ", record.price_change_percentage_24h);
      //   console.log("Record:", record);
      //   return record.price_change_percentage_24h <= 0
      //     ? "red-text"
      //     : "green-text";
      // },
      render: (text, record) => {
        // console.log("Record:", record);
        // console.log("Percentage:", record.price_change_percentage_24h);

        console.log(
          "Type of record",
          typeof record.price_change_percentage_24h
        );
        return (
          <span
            style={{
              color: record.price_change_percentage_24h <= 0 ? "red" : "green",
            }}
          >
            {record.price_change_percentage_24h}
          </span>
        );
      },
    },
    {
      title: "Market Cap",
      dataIndex: "market_cap",
    },
  ];

  const transformedData = data.map((item) => ({
    // ...item,
    name: item.name,
    current_price: `₹ ${item.current_price.toLocaleString()}`,
    price_change_percentage_24h: item.price_change_percentage_24h,
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
        className={`pagination-button ${i === currentPage ? "activePage" : ""}`}
      >
        {i}
      </button>
    );
  }

  // console.log("Transfomred Data", transformedData);
  // console.log("Market Update: ", data);
  return (
    <>
      <section className="market" id="market">
        <div className="container">
          <div className="market-update">
            <h1>Market Update</h1>
            <Table
              columns={columns}
              dataSource={transformedData}
              pagination={false}
              loading={loading}
            ></Table>
            <div className="pagination">{paginations}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketUpdate;
