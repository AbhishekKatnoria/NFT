import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/homePage";
import Layout from "./Components/Layout";
import Collection from "./pages/collection";
import Governance from "./pages/governance";
import AiImages from "./pages/aiImage";
import Community from "./pages/community";
import MarketPlace from "./pages/market-place";
import ItemDetail from "./pages/item-detail/[...id]";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SignIn from "./pages/sign-in";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/community" element={<Community />} />
          <Route path="/governance" element={<Governance />} />
          <Route
            path="/market-place/item-detail/:id"
            element={<ItemDetail />}
          />
          <Route path="/aiImage" element={<AiImages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
