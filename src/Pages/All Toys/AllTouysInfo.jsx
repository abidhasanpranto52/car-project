import React from "react";

const AllTouysInfo = ({toy}) => {
    const { _id,seller, name, price, category, email, rating, img, quantity } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-semibold">{seller}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td className="font-bold">{name}</td>
      <td>{category}</td>
      <td className="text-red-600">{"$"+ price}</td>
      <td className="text-center">{quantity}</td>
      <th>
        <button className="btn btn-outline btn-xs">details</button>
      </th>
    </tr>
  );
};

export default AllTouysInfo;
