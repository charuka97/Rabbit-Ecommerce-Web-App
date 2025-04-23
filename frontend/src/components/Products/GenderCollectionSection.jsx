import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";

import React from "react";

const GenderCollectionSection = () => {
  return (
    <section className="px-4 py-16 lg:px-0">
      <div className="container flex flex-col gap-8 mx-auto md:flex-row">
        {/* Women's collection */}
        <div className="relative flex-1">
          <img
            src={womensCollectionImage}
            alt="women's collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute p-4 bg-white bottom-8 left-8 bg-opacity-90">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/*men's collection */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImage}
            alt="women's collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute p-4 bg-white bottom-8 left-8 bg-opacity-90">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
