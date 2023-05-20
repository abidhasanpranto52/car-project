import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToysInfo from "./MyToysInfo";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const url = `https://toy-cars-server-seven.vercel.app/mytoys/${user?.email}`;
  useEffect(() => {
    fetch(url, 
    //     {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // }
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user]);

  useEffect(() => {
    // Filter toys based on search term
    const results = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, toys]);

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl">My toys</h1>
        <input
          type="text"
          placeholder="Search by toy name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-2/3 my-3 mx-auto border-2 rounded text-center"
        />
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
