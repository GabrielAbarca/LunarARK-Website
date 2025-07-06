import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground.jsx";
import Servers from "./pages/Servers.jsx";
import Shop from "./pages/Shop.jsx";
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
