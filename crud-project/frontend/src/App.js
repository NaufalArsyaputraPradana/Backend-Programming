import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserDetail from "./components/UserDetail";

const App = () => {
  const [users, setUsers] = useState([]);

  const [editingUser, setEditingUser] = useState(null);

  const handleAddOrEditUser = (newUser) => {
    if (editingUser) {
      setUsers(users.map((user) => (user.id === newUser.id ? newUser : user)));
    } else {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
    }
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header userName="Naufal Arsyaputra Pradana" />
          <main className="p-6 bg-blue-50 min-h-screen mt-16 ml-64">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/add" element={<AddUser />} />
              <Route path="/edit/:id" element={<EditUser />} />
              <Route path="/users/:id" element={<UserDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
