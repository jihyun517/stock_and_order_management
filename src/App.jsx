import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OrderRequestPage from "./pages/OrderRequestPage";
import OrderCompletedPage from "./pages/OrderCompletedPage";
import DeliveryCompletedPage from "./pages/DeliveryCompletedPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="order-request" element={<OrderRequestPage />} />
          <Route path="order-completed" element={<OrderCompletedPage />} />
          <Route path="delivery-completed" element={<DeliveryCompletedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
