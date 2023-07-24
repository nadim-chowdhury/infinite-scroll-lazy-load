import axios from "axios";
import { useEffect, useState } from "react";

export default function InfiniteScroll2() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      .then((res) => setData((prevData) => [...prevData, ...res.data]));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="container">
      {data.map((d) => (
        <div key={d.id + Math.random()} className="border m-2 p-2 rounded">
          <h3>
            <span className="badge bg-secondary">{d.id}</span> {d.title}
          </h3>
          <p>{d.body}</p>
        </div>
      ))}

      {loading && (
        <div className="p-4">
          <p className="placeholder-glow">
            <span className="placeholder col-12"></span>
          </p>

          <p className="placeholder-wave">
            <span className="placeholder col-12"></span>
          </p>
        </div>
      )}
    </div>
  );
}
