import { useState } from "react";

interface NewProduct {
  title: string;
  description: string;
  category: string;
  price: number;
}

export default function CreateProduct() {
  const [product, setProduct] = useState<NewProduct>({
    title: "",
    description: "",
    category: "",
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Product:", product);
  };

  return (
    <div className="container mx-auto p-4 border rounded border-blue-50">
      <h2 className="text-2xl font-bold mb-4 text-blue-950 ">Create Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input type="text" name="title" placeholder="Title" value={product.title} onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-950 text-white px-4 py-2 rounded w-full font-bold">Submit</button>
      </form>
    </div>
  );
};

