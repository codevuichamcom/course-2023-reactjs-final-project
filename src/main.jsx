import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "src/global.css";
import "react-toastify/dist/ReactToastify.css";
import { HomePage } from "src/pages/HomePage";
import { ShopCategoryPage } from "src/pages/ShopCategoryPage";
import { ProductDetailPage } from "src/pages/ProductDetailPage";
import { LoginPage } from "src/pages/LoginPage";
import { Layout } from "src/Layout";
import { NotFound } from "src/pages/NotFound/NotFound";
import { RegisterPage } from "src/pages/RegisterPage";
import { Provider } from "react-redux";
import { store } from "src/app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" index element={<HomePage />} />
            <Route path="shop-category" element={<ShopCategoryPage />} />
            <Route path="product-detail" element={<ProductDetailPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
