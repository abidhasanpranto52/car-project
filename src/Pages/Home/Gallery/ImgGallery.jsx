import React, { useEffect, useState } from "react";
import Category from "../../Category/Category";

const ImgGallery = () => {
  const [activeTab, setActiveTab] = useState("sports");
  const [toys, setToys] = useState([]);
  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  useEffect(() => {
    fetch(`https://toy-cars-server-seven.vercel.app/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);

  return (
    <div className="bg-bg-gradient-to-b from-black via-red-600 to black">
      <h1>Image Gallery</h1>
      <div className="flex justify-center mt-5">
        <div className="tabs ">
          <a
            className={`tab tab-lg tab-lifted ${
              activeTab == "sports"
                ? "tab-active transition-all-duration-500"
                : ""
            }`}
            onClick={() => handleTabClick("sports")}
          >
            Sports
          </a>
          <a
            className={`tab tab-lg tab-lifted ${
              activeTab == "truck"
                ? "tab-active transition-all-duration-500"
                : ""
            }`}
            onClick={() => handleTabClick("truck")}
          >
            Truck
          </a>
          <a
            className={`tab tab-lg tab-lifted ${
              activeTab == "police"
                ? "tab-active transition-all-duration-500"
                : ""
            }`}
            onClick={() => handleTabClick("police")}
          >
            Police
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto my-9">
        {toys.slice(0, 3).map((toy) => (
          <Category toy={toy} key={toy._id}></Category>
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;
