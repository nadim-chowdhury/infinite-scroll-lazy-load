import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function InfiniteScroll3() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((res) => setData((prevData) => [...prevData, ...res.data]));
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={data.length}
        next={() => setPage((prev) => prev + 1)}
        loader={<h4>Loading...</h4>}
        hasMore={data.length <= 100 ? true : false}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data.map((d, index) => (
          <div key={index} className="p-2 m-2 border rounded">
            <span className="badge bg-secondary">{d.id}</span> {d.title}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
