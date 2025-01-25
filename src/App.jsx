import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VercelNavbar } from "./components/vercel-navbar";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <VercelNavbar />
      <footer className="font-sora text-gray-300 flex gap-1 items-center justify-center mb-10">
        <p>Made with </p>
        <FontAwesomeIcon icon={faHeart} color="#ffffff" />
        <p>by Durgajayasai</p>
      </footer>
    </>
  );
}

export default App;
