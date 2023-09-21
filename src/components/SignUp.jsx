import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rollNo: "",
    batch: "",
    year: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
  };

  const HandleSignUpClick = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <div className="border border-zinc-950 border-solid p-4 mx-auto max-w-md rounded-lg " style={{ marginTop: '10px' }}>  
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8   ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
          <img
            className="mx-auto  h-10 w-auto"
            src="https://github.com/charankosari/atharva/blob/main/adsc%2025060.png?raw=true"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an account..
            </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name:"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  placeholder="Email:"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  placeholder="password:"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <input
                  id="rollNo"
                  placeholder="Roll No:"
                  name="rollNo"
                  type="text"
                  required
                  value={formData.rollNo}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <input
                  placeholder=" Batch:"
                  id="batch"
                  name="batch"
                  type="text"
                  required
                  value={formData.batch}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <select
                  id="year"
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm"
                >
                  <option value="">Select Semester</option>
                  <option value="1">I Year</option>
                  <option value="2">II Year</option>
                  <option value="3">III Year</option>
                  <option value="4">IV Year</option>
                </select>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Create
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              onClick={HandleSignUpClick}
            >
              Login
            </button>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
