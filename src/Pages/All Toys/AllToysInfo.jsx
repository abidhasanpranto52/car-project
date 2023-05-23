import React from "react";
import { Link } from "react-router-dom";
const AllToysInfo = ({ toy }) => {
  const { _id, seller, name, price, category, postedBy, image, quantity } = toy;

  return (
    <tr data-aos="zoom-in">
      <td>
        <div className="avatar">
          <div className="w-20 rounded-xl">
            <img data-aos="zoom-in" src={image} alt="Image" />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-semibold">{seller}</div>
            <div className="text-sm opacity-50">{postedBy}</div>
          </div>
        </div>
      </td>

      <td className="font-bold">{name}</td>
      <td className="text-center">{category}</td>
      <td className="font-semibold text-center text-red-600">{"$" + price}</td>
      <td className="text-center">{quantity}</td>
      <th>
        <Link to={`/toydetails/${_id}`}>Details</Link>
      </th>
    </tr>
  );
};

export default AllToysInfo;
