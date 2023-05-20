import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // data.skills = selectedOption;

    fetch("http://localhost:5000/postToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };

  return (
    <div>
      <h1
        style={{ "font-family": "'Rancho', cursive" }}
        className="my-5 text-center font-bold text-3xl "
      >
        Add A Toy
      </h1>
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
            <input className="btn btn-block" value="Post Job" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
