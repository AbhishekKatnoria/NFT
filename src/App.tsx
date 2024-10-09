import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/homePage";
import Layout from "./Components/Layout";
import Collection from "./pages/collection";
import Governance from "./pages/governance";
import AiImages from "./pages/aiImage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/aiImage" element={<AiImages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
