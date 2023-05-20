import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ImgGallery.css";

import car1 from "../../../assets/Cars/sports car1.jpg";
import car2 from "../../../assets/Cars/sports car 2.jpg";
import truck1 from "../../../assets/Cars/truck1.jpg";
import truck2 from "../../../assets/Cars/truck2.avif";
import RC1 from "../../../assets/Cars/regular-car1.jpg";
import RC2 from "../../../assets/Cars/regular-car2.jpg";
import MF1 from "../../../assets/Cars/MF1.jpg";
import MF2 from "../../../assets/Cars/MF2.jpg";
import PC1 from "../../../assets/Cars/PC1.jpg";
import PC2 from "../../../assets/Cars/PC2.jpg";

const ImgGallery = () => {
  return (
    <div className="my-5">
      <h1 className="text-center font-semibold text-2xl  my-9">Cars Gallery</h1>
      <h2 className="text-center font-bold text-3xl">
        We have All Types Of Car
      </h2>
      <br />
      <p className="text-center font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        debitis.
      </p>
      <Tabs className="border-2 p-5 bg-slate-100 mt-4 rounded">
        <div className=" place-item-center rounded">
          <TabList className="p-4 space-x-4 grid grid-cols-5 gap-4 place-items-center">
            <Tab className="border rounded-lg px-4 py-2 bg-orange-600 text-white ">
              Sports Car
            </Tab>
            <Tab className="border rounded-lg px-4 py-2 bg-orange-600 text-white ">
              Truck
            </Tab>
            <Tab className="border rounded-lg px-4 py-2 bg-orange-600 text-white ">
              Regular Car
            </Tab>
            <Tab className="border rounded-lg px-4 py-2 bg-orange-600 text-white ">
              Mini Fire Truck
            </Tab>
            <Tab className="border rounded-lg px-4 py-2 bg-orange-600 text-white ">
              Mini police car
            </Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <div className="lg:h-[400px]">
                <img
                  src={car1}
                  alt="Toy 1"
                  className="w-full h-full mb-2 rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold">Chevrolet Corvette Z06</h3>
              <p>Price: $200000</p>
              <p>Rating: 4.8</p>
              <button
                onClick={() =>
                  alert("You have to log in first to view details")
                }
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Details
              </button>
            </div>
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <div className="lg:h-[400px]">
                <img
                  src={car2}
                  alt="Toy 1"
                  className="w-full h-full mb-2 rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold">Porsche 718 Boxster</h3>
              <p>Price: $150000</p>
              <p>Rating: 4.3</p>
              <button
                onClick={() =>
                  alert("You have to log in first to view details")
                }
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Details
              </button>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="border border-gray-300 rounded-md p-4  bg-white">
              <div className="lg:h-[400px]">
                <img
                  src={truck1}
                  alt="Toy 1"
                  className="w-full h-full mb-2 rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold">Hundai</h3>
              <p>Price: $8000</p>
              <p>Rating: 4.8</p>
              <button
                onClick={() =>
                  alert("You have to log in first to view details")
                }
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Details
              </button>
            </div>
            <div className="border border-gray-300 rounded-md p-4  bg-white">
              <div className="lg:h-[400px]">
                <img
                  src={truck2}
                  alt="Toy 1"
                  className="w-full h-full mb-2 rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold">ToYoTa</h3>
              <p>Price: $15000</p>
              <p>Rating: 4.5</p>
              <button
                onClick={() =>
                  alert("You have to log in first to view details")
                }
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Details
              </button>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <div className="lg:h-[400px]">
                <img
                  src={RC1}
                  alt="Toy 1"
                  className="w-full h-full mb-2 rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold">Mercedes S600</h3>
              <p>Price: $10</p>
              <p>Rating: 4.5</p>
              <button
                onClick={() =>
                  alert("You have to log in first to view details")
                }
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Details
              </button>
            </div>
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <div className="lg:h-[400px]">
                <img
                  src={RC2}
                  alt="Toy 1"
                  className="w-full h-full mb-2 rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold">Volvo XC90</h3>
              <p>Price: $15</p>
              <p>
                Rating: <span> </span>{" "}
              </p>
              <button
                onClick={() =>
                  alert("You have to log in first to view details")
                }
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Details
              </button>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <div className="lg:h-[400px]">
                <img
                  src={MF1}
                  alt="Toy 1"
                  className="w-full h-full mb-2 rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold">Mini Fire Truck</h3>
              <p className="text-red-600">Price: $1055</p>
              <p>Rating: 4.5</p>
              <button
                onClick={() =>
                  alert("You have to log in first to view details")
                }
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Details
              </button>
            </div>
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <div className="lg:h-[400px]">
                <img
                  src={MF2}
                  alt="Toy 1"
                  className="w-full h-full mb-2 rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold">Emergency Fire</h3>
              <p>Price: $1589</p>
              <p>
                Rating: <span> </span>{" "}
              </p>
              <button
                onClick={() =>
                  alert("You have to log in first to view details")
                }
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Details
              </button>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <div className="lg:h-[400px]">
                <img
                  src={PC1}
                  alt="Toy 1"
                  className="w-full h-full mb-2 rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold">Police Car white</h3>
              <p>Price: $4000</p>
              <p>Rating: 4.5</p>
              <button
                onClick={() =>
                  alert("You have to log in first to view details")
                }
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Details
              </button>
            </div>
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <div className="lg:h-[400px]">
                <img
                  src={PC2}
                  alt="Toy 1"
                  className="w-full h-full mb-2 rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold">Police Car Black</h3>
              <p>Price: $1900</p>
              <p>
                Rating: <span> </span>{" "}
              </p>
              <button
                onClick={() =>
                  alert("You have to log in first to view details")
                }
                className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Details
              </button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ImgGallery;
