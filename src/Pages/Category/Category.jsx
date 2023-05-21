import React from "react";
import { Link } from "react-router-dom";
import { TabPanel } from "react-tabs";

const Category = ({ item }) => {
  const { _id, seller, name, price, category, rating, postedBy, image, quantity } =
    item || {};
  return (
    // <TabPanel>
        <div>
      <div className="border border-gray-300 rounded-md p-4  bg-white">
        <div className="lg:h-[400px]">
          <img
            src={image}
            alt="Toy 1"
            className="w-full h-full mb-2 rounded-md"
          />
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p>Price: {"$" +price}</p>
        <p>Rating: {rating}</p>
        <Link to={`/toydetails/${_id}`}>
        <button className="btn btn-outline text-white bg-orange-700">Details</button></Link>
      </div>
    </div>
    // </TabPanel>
  );
};

export default Category;
