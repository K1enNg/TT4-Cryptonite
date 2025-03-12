import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import CoinDetail from "./components/CoinDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/coin/:coinId" element={<CoinDetail />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
