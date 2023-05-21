import { Link, useLoaderData } from "react-router-dom";
import 'animate.css';

const ToyDetails = () => {
  const details = useLoaderData();
  const {
    image,
    name,
    price,
    seller,
    postedBy,
    rating,
    quantity,
    description,
  } = details;
  console.log(details);
  return (
    <div className="animate__animated animate__zoomIn card lg:card-side bg-base-200 shadow-xl m-4 p-6">
      <div className="w-full lg:w-1/2">
        <img className="rounded" src={image} alt="Album" />
      </div>
      <div className="card-body">
        <p className="card-title">Toy Name: {name}</p>
        <p> Seller name: <span className="font-semibold">{seller}</span> </p>
        <p> Seller Email: <span className="font-semibold">{postedBy}</span> </p>
        <p> Price: <span className="font-semibold text-red-500">{"$" +price}</span> </p>
        <p> Quantity: <span className="font-semibold">{quantity + "pc"}</span> </p>
        <p> Ratings: <span className="font-semibold">{rating}</span> </p>
        <p><span className="font-semibold text-amber-700">{description}</span> </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
