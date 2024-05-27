import React, { useState } from "react";

const ComponentB = ({ data }) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editUser, setEditUser] = useState({ name: "", email: "", mobile: "" });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(data[index]);
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setEditUser({ name: "", email: "", mobile: "" });
  };

  const handleSaveEdit = (index) => {
    data[index] = editUser;
    handleCancelEdit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  return (
    <div>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td>
                    <input
                      name="name"
                      value={editUser.name}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      name="email"
                      value={editUser.email}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      name="mobile"
                      value={editUser.mobile}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentB;