import { useEffect, useState } from "react";
import axios from "axios";

export const Products = () => {
  const [products, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=10"
        );
        const data = response.data;
        setItems(data);
      } catch (error) {
        console.error("Items fetch error:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Shop Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-md shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-4 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <p className="text-gray-700 mb-4 overflow-hidden line-clamp-3">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="text-gray-500">{product.category}</div>
                <div className="flex items-center">
                  <span className="text-yellow-500">{product.rating.rate}</span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.rating.count} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
