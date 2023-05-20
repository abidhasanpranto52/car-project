

const AllToys = () => {

  

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
              
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllToys;
