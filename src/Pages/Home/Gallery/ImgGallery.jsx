import React, { useEffect, useState } from "react";
import GalleryInfo from "./GalleryInfo";

const ImgGallery = () => {
  const [toyCatagory, setToyCatagory] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports");

  useEffect(() => {
    fetch("https://toy-cars-server-seven.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToyCatagory(data);
      });
  }, [activeTab]);

  const SportsCatagory = toyCatagory?.filter((toy) => toy.category === "Sports");
  const TruckCatagory = toyCatagory?.filter((toy) => toy.category === "Truck");
  const PoliceCatagory = toyCatagory?.filter((toy) => toy.category === "Police");

  const handleCarCatagory = () => {
    setActiveTab("Sports");
  };

  const handleTruckCatagory = () => {
    setActiveTab("Truck");
  };
  const handleBusCatagory = () => {
    setActiveTab("Police");
  };
  return (
    <div className="lg:px-12 px-2 mb-6 mt-12">
      <h1 className="text-3xl font-extrabold text-center">Shop By Catagory</h1>{" "}
      <div>
        <div className="tabs flex justify-center m-4">
          <a
            onClick={handleCarCatagory}
            className={`tab tab-lifted ${
              activeTab === "Sports" ? "tab-active" : ""
            }`}
          >
            Car
          </a>
          <a
            onClick={handleTruckCatagory}
            className={`tab tab-lifted ${
              activeTab === "Truck" ? "tab-active" : ""
            }`}
          >
            Truck
          </a>
          <a
            onClick={handleBusCatagory}
            className={`tab tab-lifted ${
              activeTab === "Police" ? "tab-active" : ""
            }`}
          >
            Bus
          </a>
        </div>
        <div className="lg:grid grid-cols-3 gap-4">
          {activeTab === "Sports"
            ? SportsCatagory.map((toys) => (
                <GalleryInfo toys={toys} key={toys._id}></GalleryInfo>
              ))
            : "" || activeTab === "Truck"
            ? TruckCatagory.map((toys) => (
              <GalleryInfo toys={toys} key={toys._id}></GalleryInfo>
              ))
            : "" || activeTab === "Police"
            ? PoliceCatagory.map((toys) => (
              <GalleryInfo toys={toys} key={toys._id}></GalleryInfo>
              ))
            : ""}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ImgGallery;
