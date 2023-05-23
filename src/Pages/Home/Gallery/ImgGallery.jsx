import React, { useEffect, useState } from "react";
import GalleryInfo from "./GalleryInfo";

const ImgGallery = () => {
  const [toyCategory, setToyCategory] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports");

  useEffect(() => {
    fetch("https://toy-cars-server-abidhasanpranto52.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToyCategory(data);
      });
  }, [activeTab]);

  const SportsCategory = toyCategory?.filter((toy) => toy.category === "Sports");
  const TruckCategory = toyCategory?.filter((toy) => toy.category === "Truck");
  const PoliceCategory = toyCategory?.filter((toy) => toy.category === "Police");
  const RegularCategory = toyCategory?.filter((toy) => toy.category === "Regular");

  const handleSportsCategory = () => {
    setActiveTab("Sports");
  };

  const handleTruckCategory = () => {
    setActiveTab("Truck");
  };
  const handlePoliceCategory = () => {
    setActiveTab("Police");
  };
  const handleRegularCategory = () => {
    setActiveTab("Regular");
  };
  return (
    <div className="lg:px-12 px-2 mb-6 mt-12">
      <h1 className="text-3xl font-extrabold text-center">Shop By Category</h1> <br />
      <p className="font-semibold text-gray-500 text-center">It provides a convenient way for customers to browse and explore products based on specific categories or departments.</p>
      <div>
        <div className="tabs flex justify-center m-4">
          <a
            onClick={handleSportsCategory}
            className={`tab tab-lifted ${
              activeTab === "Sports" ? "tab-active" : ""
            }`}
          >
            Sports
          </a>
          <a
            onClick={handleTruckCategory}
            className={`tab tab-lifted ${
              activeTab === "Truck" ? "tab-active" : ""
            }`}
          >
            Truck
          </a>
          <a
            onClick={handlePoliceCategory}
            className={`tab tab-lifted ${
              activeTab === "Police" ? "tab-active" : ""
            }`}
          >
            Police
          </a>
          <a
            onClick={handleRegularCategory}
            className={`tab tab-lifted ${
              activeTab === "Regular" ? "tab-active" : ""
            }`}
          >
            Regular 
          </a>
        </div>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeTab === "Sports"
            ? SportsCategory.map((toys) => (
                <GalleryInfo toys={toys} key={toys._id}></GalleryInfo>
              ))
            : "" || activeTab === "Truck"
            ? TruckCategory.map((toys) => (
              <GalleryInfo toys={toys} key={toys._id}></GalleryInfo>
              ))
            : "" || activeTab === "Police"
            ? PoliceCategory.map((toys) => (
              <GalleryInfo toys={toys} key={toys._id}></GalleryInfo>
              ))
            : "" || activeTab === "Regular"
            ? RegularCategory.map((toys) => (
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
