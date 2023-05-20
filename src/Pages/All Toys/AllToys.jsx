import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AllTouysInfo from "./AllTouysInfo";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const url = "http://localhost:5000/alltoys";
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
        <h1 className="text-center text-2xl">My toys : {toys.length}</h1>
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
                  <th>Seller</th>
                  <th>Toy Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th className="text-center">Available Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {toys.map((toy) => (
                  <AllTouysInfo
                    key={toy._id}
                    toy={toy}
                    // handleDelete={handleDelete}
                    // handleBookingConfirm={handleBookingConfirm}
                  ></AllTouysInfo>
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
