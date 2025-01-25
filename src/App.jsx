import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VercelNavbar } from "./components/vercel-navbar";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between">
      <h1 className="font-sora text-white text-xl md:text-4xl font-bold mt-20 text-center select-none">
        Vercel Navbar Interaction
      </h1>
      <VercelNavbar />
      <footer className="font-sora text-gray-300 flex gap-1 items-center justify-center mb-20 select-none">
        <p>Made with </p>
        <FontAwesomeIcon icon={faHeart} color="#ffffff" />
        <p>by Durgajayasai</p>
      </footer>
    </div>
  );
}

export default App;
