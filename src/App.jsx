import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
