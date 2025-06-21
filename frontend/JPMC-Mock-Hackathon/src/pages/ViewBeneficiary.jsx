import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewBeneficiary() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", location: "" });

  useEffect(() => {
    fetchBeneficiaries();
  }, []);

  const fetchBeneficiaries = async () => {
    const res = await axios.get("http://localhost:5000/api/beneficiaries");
    setBeneficiaries(res.data);
  };

  const handleAdd = async () => {
    await axios.post("http://localhost:5000/api/beneficiaries", form);
    fetchBeneficiaries();
    setForm({ name: "", age: "", location: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/beneficiaries/${id}`);
    fetchBeneficiaries();
  };

  const handleUpdate = async (id) => {
    const updatedName = prompt("Enter new name:");
    const updatedAge = prompt("Enter new age:");
    const updatedLocation = prompt("Enter new location:");
    if (updatedName && updatedAge && updatedLocation) {
      await axios.put(`http://localhost:5000/api/beneficiaries/${id}`, {
        name: updatedName,
        age: updatedAge,
        location: updatedLocation,
      });
      fetchBeneficiaries();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Beneficiary Management</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <button onClick={handleAdd}>Add Beneficiary</button>
      </div>

      <ul>
        {beneficiaries.map((b) => (
          <li key={b._id}>
            {b.name}, Age: {b.age}, Location: {b.location}{" "}
            <button onClick={() => handleUpdate(b._id)}>Edit</button>
            <button onClick={() => handleDelete(b._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewBeneficiary;
