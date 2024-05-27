import { useState } from "react";

const ComponentA = ({ updateData }) => {
  const [users, setUsers] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!users.name || !users.email || !users.mobile) {
      alert("Please fill in all fields");
      return;
    }
    updateData(users);
    console.log("form users", users);
    setUsers({ name: "", email: "", mobile: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          value={users.name}
          name="name"
          id="name"
          type="text"
          onChange={handleChange}
          placeholder="Enter name"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          value={users.email}
          name="email"
          id="email"
          type="email"
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <label htmlFor="mobile">Mobile:</label>
        <input
          value={users.mobile}
          name="mobile"
          id="mobile"
          type="tel"
          onChange={handleChange}
          placeholder="Enter mobile"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComponentA;
