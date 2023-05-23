import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    name,
    image,
  } = toy;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://toy-cars-server-abidhasanpranto52.vercel.app/updatetoy/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Thank You🥰!",
            text: "Toys Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
    console.log(data);
  };

  return (
    <div data-aos="zoom-in">
      <h1 className="my-5 text-center font-bold text-3xl ">
        Update : {name} Information
      </h1>
      <div className="border-2 border-slate-600 rounded p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="grid grid-cols-1 place-items-center gap-3 my-5 text-center">
            <div>
              <img className="w-[25rem] h-[15rem] border mb-4 rounded" src={image} alt="" />
            </div>

            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 my-5 text-center">
            
            <input
              className="text-input p-3 border-2 rounded w-full border-indigo-600"
              {...register("price", { required: true })}
              placeholder="Price"
              type="number"
            />
            <input
              className="text-input p-3 border-2 rounded w-full border-indigo-600"
              {...register("quantity", { required: true })}
              placeholder="Available Quantity"
              type="number"
            />
          </div>

          <div className="my-5">
            <input
              className="text-input w-full textarea border-2 rounded border-indigo-600"
              {...register("description", { required: true })}
              placeholder="Details Description"
            />
          </div>
          <div className="my-5">
            <input
              className="btn btn-block bg-red-600"
              value="Update"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
