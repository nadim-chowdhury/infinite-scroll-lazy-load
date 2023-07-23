import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import InfiniteScroll from "./InfiniteScroll";
import LazyLoading from "./LazyLoading";
import SwipperCards from "./SwipperCards";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/lazy-loading" element={<LazyLoading />} />
        <Route path="/swipper-cards" element={<SwipperCards />} />
      </Routes>
    </BrowserRouter>
  );
}
