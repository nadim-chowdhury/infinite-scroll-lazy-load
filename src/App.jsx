import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import InfiniteScroll3 from "./InfiniteScroll3";
import LazyLoading from "./LazyLoading";
import SwipperCards from "./SwipperCards";
import Modal from "react-modal";
import { useState } from "react";

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <BrowserRouter>
      <div>
        <button onClick={() => setIsOpen(true)} className="btn btn-primary">
          Open Modal
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <button onClick={() => setIsOpen(false)} className="btn btn-primary">
            close
          </button>
          <div className="container">
            I am a modal Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptate aliquam nam veritatis vel, eius tempore at magni
            voluptatem dignissimos omnis exercitationem, fugit nulla aspernatur
            qui? Libero aliquid itaque dicta voluptatibus architecto velit
            voluptates vitae molestiae neque praesentium consequuntur eaque est
            reprehenderit quia reiciendis alias, delectus enim voluptate
            tenetur? Minima, odit?
          </div>
        </Modal>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll3 />} />
        <Route path="/lazy-loading" element={<LazyLoading />} />
        <Route path="/swipper-cards" element={<SwipperCards />} />
      </Routes>
    </BrowserRouter>
  );
}
