import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const GalleryInfo = ({ toys }) => {
  const { image, name, price, rating, _id } = toys;
  const { user } = useContext(AuthContext);
  const notify = () =>
    !user && toast("You have to log in first to view details!");

  return (
    <div data-aos="zoom-in">
      <div className="lg:px-3 rounded-md lg:gap-8 border-2 border-gray-300 py-4 mb-2 lg:mb-0">
        <div>
          <img
            className="w-[25rem] h-[15rem] border mb-4 rounded"
            src={image}
            alt={name}
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl ">Toy Name : <span className="text-green-600">{name}</span></h2>
          <h4 className="font-semibold ">Price: <span className="text-orange-600">{price}</span></h4>
          <h4 className="text-gray-500 font-semibold">Rating: {rating}</h4>
        </div>
        <hr />
        <Link to={`/toydetails/${_id}`}>
          <button
            onClick={notify}
            className="btn btn-error mt-4 px-4 py-2 rounded-md text-white"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GalleryInfo;
