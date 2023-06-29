import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoHome from "./pages/CryptoHome";
import CryptoDetail from "./pages/CryptoDetail";
import Trending from "./components/Trending";
import Markets from "./components/Markets";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/allcoins" element={<Markets />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
