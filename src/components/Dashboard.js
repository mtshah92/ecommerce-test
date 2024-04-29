import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

export const Dashboard = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-8">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <p className="text-lg text-gray-800 mb-4">
          Welcome, <span className="text-indigo-600">{username}</span>!
        </p>
        <div className="border-t border-gray-200 pt-4">
          <button
            className="text-xl font-semibold mb-2 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-4"
            onClick={() => navigate("/products")}
          >
            Browse Products
          </button>
          <button
            className="text-xl font-semibold mb-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
