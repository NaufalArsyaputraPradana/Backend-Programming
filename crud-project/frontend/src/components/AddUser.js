import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const [formData, setFormData] = useState({ name: "", email: "", gender: "Male" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", formData);
      navigate("/users");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow rounded mt-12">
      <h2 className="text-3xl font-semibold mb-6">Tambah Pengguna</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-1">Nama Pengguna</label>
          <input
            type="text"
            name="name"
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Gender</label>
          <select
            name="gender"
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 transition w-full"
        >
          Tambah Pengguna
        </button>
      </form>
    </div>
  );
};

export default AddUser;
