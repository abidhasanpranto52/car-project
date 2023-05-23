import React from "react";
import "animate.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyToysInfo = ({ toy, handleDelete }) => {
  const { _id, seller, name, price, category, postedBy, image, quantity } = toy;

  const handleToyUpdate = (data) => {
    fetch(`https://toy-cars-server-abidhasanpranto52.vercel.app/updatetoy/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
  };

  return (
    <tr data-aos="fade-up">
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
      <td>
        <Link to={`/toydetails/${_id}`}>Details</Link>
      </td>
      <td>
        <div>
          <Link to={`/updatetoy/${_id}`}>
            <button onClick={() => handleToyUpdate} className="btn-xs">
              <AiFillEdit className="border-2 border-black text-2xl rounded"></AiFillEdit>
            </button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn-xs">
            <AiFillDelete className="border-2 border-black text-2xl rounded"></AiFillDelete>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyToysInfo;
