import React from "react";
import { useState, useEffect } from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      setFormValues(initialValues);
    }
    navigate("/chat");
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  return (
    <div className="bg-blue-500 w-full h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="flex-1 flex py-10 px-5">
        <HiChatBubbleLeftRight size={40} className="text-white" />
        <div className="text-white text-sm font-semibold ">
          <h1 className="uppercase font-bold">voxig</h1>
          <p>Best online messaging platform</p>
        </div>
      </div>
      <div className="py-6 px-12 flex justify-end ">
        <div className=" bg-white w-full h-screen md:w-150 lg:w-250 py-8 text-black rounded-xl">
          <div className="flex flex-col justify-center items-center ">
            <div>
              <h1 className="text-center text-4xl font-semibold text-blue-500">
                Login
              </h1>
              <p className="text-sm text-gray-600">
                Login to continue Chatting with friends
              </p>
            </div>

            {isSubmit && Object.keys(formErrors).length === 0 && (
              <div className="text-green-500 mt-3">Login successful</div>
            )}

            {isSubmit && Object.keys(formErrors).length > 0 && (
              <div className="text-red-500 mt-3">
                Please fill all details correctly
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-4 bg-gray-50 px-12 py-12 w-70 md:w-100 lg:w-150 rounded-2xl"
            >
              <div className="flex flex-col mb-4">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="enter your email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="border-1 border-gray-200 px-2 py-1 rounded outline-0"
                />
                <p className="text-sm text-red-500">{formErrors.email}</p>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="enter your password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="border-1 border-gray-200 px-2 py-1 rounded outline-0"
                />
                <p className="text-sm text-red-500">{formErrors.password}</p>
              </div>

              <div className="flex text-center gap-2 mb-6">
                <input type="radio" />
                Remember me
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-blue-500 px-2 py-1 w-full md:px-6 md:py-3 rounded text-white  text-xl cursor-pointer">
                  Login
                </button>
              </div>
            </form>

            <div className="flex justify-center items-center gap-2 md:mt-12 mt-6">
              <div className="w-15 md:w-30 lg:w-60 h-px bg-black/10"></div>
              <div className="text-sm w-25 ml-5">Login with</div>
              <div className="w-15 md:w-30 lg:w-60 h-px bg-black/10"></div>
            </div>
            <div className="flex mt-2 gap-2 items-center">
              <div className="bg-gray-200 px-5 py-2 rounded cursor-pointer">
                <FcGoogle className="" />
              </div>
              <div className="bg-gray-200 px-5 py-2 rounded cursor-pointer">
                <FaFacebook className="text-blue-600" />
              </div>
              <div className="bg-gray-200 px-5 py-2 rounded cursor-pointer">
                <FaInstagram className="text-pink-500" />
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-400 flex gap-1">
              <p>Don't have an account?</p>
              <Link to="/register" className="underline text-blue-500">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
