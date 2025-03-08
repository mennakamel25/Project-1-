import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  tags: string[];
  thumbnail: string;
}

export default function ProductList() {
   
  const [fatsDta, setFatsDta] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products");
          const data = await response.json();
          setFatsDta(data.products);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData(); 
    }, []);
  
 

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-950">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {fatsDta.map((product) => (
          <div key={product.id} className="border border-blue-50 p-4 rounded-lg shadow-lg">
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.category}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <p className="text-sm font-bold mt-2">Stock: {product.stock}</p>
            <button className="mt-2 bg-blue-950 text-white px-4 py-2 rounded font-bold  w-full">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

