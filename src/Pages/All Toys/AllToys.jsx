import { useEffect, useRef, useState, useContext } from "react";
import AllToysInfo from "./AllToysInfo";
import "./Toys.css";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const navigate = useNavigate();

  const [asc, setAsc] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:5000/alltoys?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setToys(data);
        } else {
          navigate("/");
        }
      });
  }, [asc, search, navigate]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };

  return (
    <div>
      <div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-600">All Toys</h2>
          <div className="form-control">
            <div className="input-group flex justify-between">
              <div className="flex items-center">
                <input
                  type="text"
                  ref={searchRef}
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button onClick={handleSearch} className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => setAsc(!asc)}
                >
                  {asc ? "Price: High to Low" : "Price: Low to High"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-center">Image</th>
                  <th className="text-center">Seller</th>
                  <th>Toy Name</th>
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
