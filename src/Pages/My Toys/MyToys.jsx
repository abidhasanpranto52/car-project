import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToysInfo from "./MyToysInfo";
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `http://localhost:5000/mytoys/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user]);


  return (
      <div data-aos="flip-down">
        <h1 className="text-center font-bold text-2xl">My toys</h1>
        <div>
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
                  <MyToysInfo key={toy._id} toy={toy}></MyToysInfo>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
