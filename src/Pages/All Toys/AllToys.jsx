import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AllToysInfo from "./AllToysInfo";
import "./Toys.css";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = "https://toy-cars-server-seven.vercel.app/alltoys";
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl">All toys</h1>

        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-center">Image</th>
                  <th className="text-center">Seller</th>
                  <th className="text-center">Toy Name</th>
                  <th className="text-center">Sub-category</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Available Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {toys.map((toy) => (
                  <AllToysInfo key={toy._id} toy={toy}></AllToysInfo>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
