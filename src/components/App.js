import bgAbstract from "../assets/abstract-bg.png";

import Navbar from "./Navbar";
import Socials from "./Socials";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div
      className="h-[100%] min-h-screen w-[100%] bg-cover"
      style={{
        backgroundImage: `url(${bgAbstract})`,
      }}
    >
      <Navbar />
      <Socials />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>fdfsd</>} />
          <Route path="/about" element={<>about</>} />
          <Route path="/music" element={<>music</>} />
          <Route path="/contact" element={<>contact</>} />
          <Route path="*" element={<>where are you man</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
