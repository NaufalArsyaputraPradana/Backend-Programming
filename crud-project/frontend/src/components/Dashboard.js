import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setTotalUsers(response.data.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-16">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dashboard</h2>
      <p className="text-lg text-gray-600">
        Total Pengguna: <span className="font-bold text-blue-600">{totalUsers}</span>
      </p>
      <p className="mt-2 text-gray-500">
        Selamat Datang di Manajemen Pengguna, silahkan kelola data pengguna di menu samping.
      </p>
    </div>
  );
};

export default Dashboard;
