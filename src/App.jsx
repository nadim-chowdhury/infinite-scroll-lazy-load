import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import InfiniteScroll3 from "./InfiniteScroll3";
import LazyLoading from "./LazyLoading";
import SwipperCards from "./SwipperCards";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll3 />} />
        <Route path="/lazy-loading" element={<LazyLoading />} />
        <Route path="/swipper-cards" element={<SwipperCards />} />
      </Routes>
    </BrowserRouter>
  );
}
