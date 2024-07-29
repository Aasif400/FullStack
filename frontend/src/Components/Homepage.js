import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    // You can perform any validation or processing here before navigating to Form Page.
    navigate(`/form/${username}`);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Homepage;
