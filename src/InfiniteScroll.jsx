import { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight;

    if (isBottom && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {data.map((d) => (
        <h3 key={d.title + Math.random()}>
          {d.id} {d.title}
        </h3>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
}
