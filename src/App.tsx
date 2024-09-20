import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateCarousel from "./features/carousel-generator/pages";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateCarousel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
