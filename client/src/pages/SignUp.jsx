import React from "react";
import { Link } from "react-router-dom"; // Import Link to handle navigation

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      {/* Title */}
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      {/* Sign Up Form */}
      <form className="flex flex-col gap-4">
        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          className="bg-slate-100 p-3 rounded-lg"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="bg-slate-100 p-3 rounded-lg"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="bg-slate-100 p-3 rounded-lg"
        />

        {/* Confirm Password Input */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="bg-slate-100 p-3 rounded-lg"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Sign Up
        </button>
      </form>

      {/* Link to Sign In Page */}
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to="/sign-in" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
