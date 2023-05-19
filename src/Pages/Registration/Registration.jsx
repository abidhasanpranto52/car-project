import GoogleSignIn from "../Shared/GoogleSignIn/GoogleSignIn";
import img from '../../assets/logo/registration.png'
import React from 'react';
import { Link } from "react-router-dom";

const Registration = () => {

    const handleRegister = {

    }

    return (
        <div>

<div className="hero animate__animated animate__zoomIn min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={img} alt="" />
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="Enter Your Image Url"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* <Link to={'/login'}> */}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              {/* </Link> */}
            </form>
            <p className="text-center mt-5">
              Already have an Account Yet?{" "}
              <Link to={"/login"} className="text-red-500 font-bold">
                Log In
              </Link>
            </p>
            <GoogleSignIn/>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Registration;