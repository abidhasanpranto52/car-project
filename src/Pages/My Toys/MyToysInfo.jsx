import React from "react";
import 'animate.css';

const MyToysInfo = ({ toy }) => {
  const { seller, name, price, category, postedBy, image, quantity } = toy;

  return (
    <tr className="animate__animated animate__slideInDown">
      <td>
        <div className="avatar">
          <div className="w-20 rounded-xl">
            <img src={image} alt="Image" />
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
      <td>{category}</td>
      <td className="text-red-600">{"$" + price}</td>
      <td className="text-center">{quantity}</td>
      <th>
        <button className="btn btn-outline btn-xs">details</button>
      </th>
    </tr>
  );
};

export default MyToysInfo;
