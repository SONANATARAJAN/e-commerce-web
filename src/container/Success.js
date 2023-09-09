import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const [count, setCount] = useState(15);
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count - 1)}, 1000);
      setTimeout(() => navigate("/"), 15000);
  }, [navigate]);

  return (
    <div className="h3">
      Your order as been placed successfully. You will be redirected in {count}{" "}
      seconds
    </div>
  );
}
