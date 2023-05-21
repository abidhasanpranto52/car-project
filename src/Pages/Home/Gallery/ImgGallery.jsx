import React, { useContext, useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ImgGallery.css";
import { AuthContext } from "../../Provider/AuthProvider";
import Category from "../../Category/Category";

const ImgGallery = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [subcategory, setSubCategory] = useState();
  const [filterCategory, setFilterCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setItems(result);
      });
  }, []);

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
      {/* <Tabs className="border-2 p-5 bg-slate-100 mt-4 rounded">
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
      </Tabs> */}

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {items?.map((item) => (
          <Category item={item}></Category>
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;
