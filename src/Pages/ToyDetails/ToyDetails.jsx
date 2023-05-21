import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const details = useLoaderData();
  const { image, price } = details;

  return (
    <div className="card  card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end items-center">
          <p className="text-red-500 font-bold">Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
