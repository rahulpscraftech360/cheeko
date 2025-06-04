import { HashRouter, Route, Routes } from "react-router-dom";
import { AddressPage } from "./screens/AddressPage/AddressPage";
import { CartPage } from "./screens/CartPage/CartPage";
import { HomePage } from "./screens/HomePage/HomePage";
import { PaymentPage } from "./screens/PaymentPage/PaymentPage";
import { PaymentStatusPage } from "./screens/PaymentStatusPage/PaymentStatusPage";
import { ProductPage } from "./screens/ProductPage/ProductPage";
import { PrivacyPolicyPage } from "./screens/PrivacyPolicyPage/PrivacyPolicyPage";

// Global style to reset margin and padding
const globalStyle = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default function App() {
  return (
    <>
      <style>{globalStyle}</style>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          {/* <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-status" element={<PaymentStatusPage />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}
