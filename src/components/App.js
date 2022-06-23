import bgAbstract from "../assets/abstract-bg.png";

import Navbar from "./Navbar";
import Socials from "./Socials";

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
      fdsfsdfsd
    </div>
  );
}
