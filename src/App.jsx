import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductPage";
import UsersPage from "./pages/UsersPage";
import OrdersPage from "./pages/OrdersPage";
import SalesPage from "./pages/SalesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <div className="flex bg-gray-900 text-gray-100 h-screen overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/orders" element={<OrdersPage />}></Route>
        <Route path="/sales" element={<SalesPage />}></Route>
        <Route path="/analytics" element={<AnalyticsPage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
