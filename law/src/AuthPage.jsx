import React from "react";
import bgImage from "./assets/bluetexture.webp";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase"; // make sure path is correct

const AuthPage = ({ isLogin = true }) => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home"); // Replace with your desired route
    } catch (error) {
      console.error("Google Login Error", error);
      alert("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Top Nav with Search Bar */}
      <div className="flex justify-between items-center px-6 py-4 text-white">
        <Link to="/" className="text-xl font-bold flex items-center gap-2 hover:underline">
          <span>⚖️</span>
          <span>India Bix</span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="#" className="hover:underline">Categories</Link>
          <Link to="#" className="hover:underline">Online Test</Link>

          {/* Search Bar */}
          <div className="relative ml-2">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full px-4 py-1 text-black w-40 md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>
        </div>
      </div>

      {/* Auth Form - Centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white bg-opacity-90 rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {isLogin ? "Welcome back" : "Create an account"}
          </h2>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 mb-4"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-4">
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <span className="w-full h-px bg-gray-300" />
              <span>OR</span>
              <span className="w-full h-px bg-gray-300" />
            </div>
          </div>

          {/* Google Sign-In */}
          {/* Google Sign-In */}
<button
  onClick={handleGoogleLogin}
  className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-200"
>
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google logo"
    className="w-5 h-5"
  />
  <span className="text-gray-700 font-medium">Continue with Google</span>
</button>


          {/* Switch Auth Mode */}
          <div className="text-center text-gray-600 mt-4">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
