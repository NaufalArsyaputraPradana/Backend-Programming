import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-16">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Daftar Pengguna</h2>
      <Link to="/add" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        Tambah Pengguna
      </Link>
      <table className="w-full table-auto bg-white shadow">
        <thead>
          <tr className="bg-blue-200">
            <th className="p-3">ID</th>
            <th className="p-3">Nama</th>
            <th className="p-3">Email</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.gender}</td>
              <td className="p-3 space-x-2">
                <Link
                  to={`/edit/${user.id}`}
                  className="px-2 py-1 bg-yellow-300 text-white rounded hover:bg-yellow-400"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Hapus
                </button>
                <Link
                  to={`/users/${user.id}`}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Lihat
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
