import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user detail:", error);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-16">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Detail Pengguna</h2>
      {user ? (
        <div className="text-gray-700">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nama:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
        </div>
      ) : (
        <p>Pengguna tidak ditemukan.</p>
      )}
    </div>
  );
};

export default UserDetail;
