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
      <Socials />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar /> fdfsd
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar /> about
              </>
            }
          />
          <Route
            path="/music"
            element={
              <>
                <Navbar /> music
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar /> contact
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Navbar /> where are you man
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
