import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Coin from "./pages/Coin";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
