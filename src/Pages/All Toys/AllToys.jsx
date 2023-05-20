import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

const AllToys = () => {
  //   const history = useHistory();
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated data fetching
    // Replace with your own logic to fetch toys data from an API or database
    const fetchToys = async () => {
      // Simulated delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulated toys data
      const toysData = [
        {
          seller: "John Doe",
          name: "Teddy Bear",
          subcategory: "Stuffed Animals",
          price: "$19.99",
          quantity: 10,
        },
        {
          seller: "Jane Smith",
          name: "Building Blocks",
          subcategory: "Educational Toys",
          price: "$24.99",
          quantity: 5,
        },
        // Add more toy objects here...
      ];

      setToys(toysData);
      setIsLoading(false);
    };

    fetchToys();
  }, []);

  useEffect(() => {
    // Filter toys based on search term
    const results = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, toys]);

  const handleViewDetails = (toy) => {
    // Check if user is logged in
    // Replace with your own logic to check if the user is logged in
    const isLoggedIn = false; // Example: User is not logged in

    // if (isLoggedIn) {
    //   // Redirect to details page
    //   history.push(`/toys/${toy.id}`); // Replace with the details page URL and pass the toy ID
    // } else {
    //   // Redirect to login page
    //   history.push("/login"); // Replace with the login page URL
    // }
  };

  return (
    <div>
      <h2>All Toys</h2>
      <input
        type="text"
        placeholder="Search by toy name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-2/3 my-3 mx-auto border-2 rounded text-center"
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <td>$20</td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-outline btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllToys;
