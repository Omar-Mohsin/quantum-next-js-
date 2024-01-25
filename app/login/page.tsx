'use client'
import React, { useState } from "react";
import InputField from "@/components/InputField";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next';
import { useSelector , useDispatch } from "react-redux";
import { SelectUser } from "@/redux/auth/authSlice";
import { addUser } from "@/redux/auth/authSlice";
function page() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

const user  = useSelector(SelectUser);
  const router = useRouter();
  const onChangeUsername = (event  :any) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event  : any) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async () => {
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);
    console.log(username, password);
    try {
      const response = await axios.post(
        "http://localhost:80/api/v1/login/access-token",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        }
      );
        console.log(response.data);
     

          dispatch(addUser(response.data))
          setCookie('token', response.data.access_token, {
        
          });
          console.log(user);
          router.replace("/dashboard");
           
        } catch (error : any) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
        console.error(error.response.data);
      } else {
        console.error("An error occurred:", error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
  
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md md:w-1/2 lg:w-1/3 text-gray-500">
        <p className="text-red-500 mb-4">{error?.detail}</p>

        <div className="space-y-4 mt-10 flex flex-col justify-center">
          <InputField
            label="Username"
            name="username"
            value={username}
            type="email"
            onChange={onChangeUsername}
            placeholder="Username"
          />
          <InputField
            label="Password"
            name="password"
            value={password}
            type="password"
            onChange={onChangePassword}
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-9">
          <button
            onClick={onSubmitHandler}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 w-40"
          >
            Login
          </button>
        </div>

        <div className="flex flex-col justify-center md:justify-between items-center mt-4">
          <Link href="/sign-up" className="text-blue-500 md:mb-0">
            Don't have an account? Sign up here.
          </Link>
          <Link href="/forget-password" className="text-blue-500 md:ml-4 mt-5">
            Forgot your password?
          </Link>
        </div>
      </div>
  
  </div>
  );
}

export default page;

