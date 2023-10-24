'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const page = () => {
    const router = useRouter();
    
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const handleInput = e => {
        setInput(prev =>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSignIn = async () => {
        console.log('Sign in called', input)
        const { data } = await axios.post('api/signin', input)
        if(data) {router.push('/dashboard')}

        console.log(data);
    }

  return (
    <div>
      <form className="w-6/12 flex justify-center" autoComplete="off">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
            Sign In Your Account
            <div className="flex items-center mb-4">
              <label
                htmlFor="checkbox-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Don't have an accound{" "}
                <Link
                  href="/signup"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign up
                </Link>
                .
              </label>
            </div>
          </h1>

          <div className="relative z-0 mb-6 group">
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleInput}
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              autoComplete="off"
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleInput}
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              autoComplete="off"
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <fieldset>
            <legend className="sr-only">Checkbox variants</legend>
            <div className="flex items-center mb-4">
              <input
                defaultChecked
                id="checkbox-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </fieldset>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
