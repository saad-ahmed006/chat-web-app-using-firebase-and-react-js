import { useState } from "react";
import {  BiSolidHide, BiSolidShow } from "react-icons/bi";
import { FaRocketchat } from "react-icons/fa";
import { Link } from "react-router-dom";
function Login() {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const toggleVisiblityPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-[#111827]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FaRocketchat className="mx-auto h-10 w-auto text-indigo-600" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 border-none outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={isShowPassword ? "password" : ""}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 border-none outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
              <span
                className="cursor-pointer absolute inset-y-0 right-0 top-3 flex items-center pr-3 mb-3"
                onClick={toggleVisiblityPassword}
              >
                {isShowPassword ? (
                  <BiSolidShow size={20} />
                ) : (
                  <BiSolidHide size={20} />
                )}
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          New to ChatSite
          <Link to={'/register'} className="font-semibold leading-6 px-1 text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
