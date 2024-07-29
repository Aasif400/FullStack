import React from "react";
import { useNavigate } from "react-router-dom";

function ResultPage() {
  const navigate = useNavigate();

  const handleReturnToHomepage = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Congratulations! Your form has been submitted.</h2>
      <button onClick={handleReturnToHomepage}>Return to Homepage</button>
    </div>
  );
}

export default ResultPage;
