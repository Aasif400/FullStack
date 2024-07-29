import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FormPage() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    name: "",
    dateOfBirth: "",
  });

  const handleSubmit = () => {
    fetch(`http://localhost:4000/forms/${username}`, {
      // Adjust the backend URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // The request was successful, so navigate to the Result Page
          navigate("/result");
        } else {
          // Handle errors here, e.g., display an error message to the user
          console.error("Error submitting form:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <form>
        <label>Phone Number:</label>
        <input
          type="text"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
        <label>Email:</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label>Date of Birth:</label>
        <input
          type="text"
          value={formData.dateOfBirth}
          onChange={(e) =>
            setFormData({ ...formData, dateOfBirth: e.target.value })
          }
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default FormPage;
