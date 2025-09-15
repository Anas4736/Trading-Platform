import { Route, Routes } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signup/Login";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import PricingPageCommodity from "./landing_page/pricing/PricingPageCommodity";
import PricingPageCurrency from "./landing_page/pricing/PricingPageCurrency";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFoundPage from "./landing_page/NotFoundPage";
import Home from "./landing_page/signup/Home";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/pricing/commodity" element={<PricingPageCommodity />} />
      <Route path="/pricing/currency" element={<PricingPageCurrency />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
