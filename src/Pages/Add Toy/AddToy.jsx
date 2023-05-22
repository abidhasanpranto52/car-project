import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import 'animate.css';

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // data.skills = selectedOption;

    fetch("https://toy-cars-server-seven.vercel.app/postToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Thank You🥰!",
            text: "Service Booked Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
    console.log(data);
  };

  return (
    <div className="animate__animated animate__zoomIn">
      <h1 className="my-5 text-center font-bold text-3xl ">Add A Toy</h1>
      <p className="my-5 text-center font-semibold text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, suscipit?</p>
      <div className="border-2 border-slate-600 rounded p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-3 my-5 text-center">
            <input
              className="w-full text-input p-3 border-2 rounded border-indigo-600 "
              {...register("image")}
              placeholder="image Url"
            />

            <input
              className="text-input p-3 border-2 rounded border-indigo-600"
              {...register("name", { required: true })}
              placeholder="Toy Name"
              defaultValue=""
            />
            <input
              className="text-input p-3 border-2 rounded border-indigo-600"
              {...register("seller", { required: true })}
              placeholder="Seller Name"
              type="text"
              defaultValue={user?.displayName}
            />
            <input
              className="text-input p-3 border-2 rounded border-indigo-600"
              value={user?.email}
              {...register("postedBy")}
              // readOnly
              placeholder="your email"
              type="email"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-3 my-5 text-center">
            <select
              className="text-input w-full p-3 border-2 rounded border-indigo-600"
              {...register("category")}
            >
              <option value="Sports">Sports Car</option>
              <option value="Truck">Truck</option>
              <option value="Regular">Regular Car</option>
              <option value="Police">Police Car</option>
            </select>
            <input
              className="text-input p-3 border-2 rounded border-indigo-600"
              {...register("price", { required: true })}
              placeholder="Price"
              type="number"
            />
            <input
              className="text-input p-3 border-2 rounded border-indigo-600"
              {...register("rating")}
              placeholder="Rating"
              type="text"
            />
            <input
              className="text-input p-3 border-2 rounded border-indigo-600"
              {...register("quantity")}
              placeholder="Available Quantity"
              type="text"
            />
          </div>

          <div className="my-5">
            <input
              className="text-input w-full textarea border-2 rounded border-indigo-600"
              {...register("description")}
              placeholder="Details Description"
            />
          </div>
          <div className="my-5">
            <input className="btn btn-block bg-orange-700" value="Add Toy" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
