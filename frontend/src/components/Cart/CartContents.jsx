import React from "react";
import { RiDeleteBin3Fill } from "react-icons/ri";

const CartContents = () => {
  const cartProduct = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 10,
      price: 35,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Shirt",
      size: "XL",
      color: "White",
      quantity: 6,
      price: 25,
      image: "https://picsum.photos/200?random=3",
    },
  ];
  return (
    <div>
      {cartProduct.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-20 h-24 mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size:{product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="px-2 py-1 text-xl font-medium border rounded">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="px-2 py-1 text-xl font-medium border rounded">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-medium">${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Fill className="w-6 h-6 mt-10 text-red-700" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
