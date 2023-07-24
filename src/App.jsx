import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import InfiniteScroll2 from "./InfiniteScroll2";
import LazyLoading from "./LazyLoading";
import SwipperCards from "./SwipperCards";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll2 />} />
        <Route path="/lazy-loading" element={<LazyLoading />} />
        <Route path="/swipper-cards" element={<SwipperCards />} />
      </Routes>
    </BrowserRouter>
  );
}
