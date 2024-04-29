import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { Products } from "./components/Products";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/user/:username"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
