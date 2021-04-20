import React, { useState, useEffect } from "react";
import Navbar from "../../molekul/Navbar";
import Card from "../../molekul/Card";
import Axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3004/users").then((res) => setUser(res.data));
  }, [user]);
  return (
    <div>
      <Navbar />
      <h3>Dashboard</h3>
      <div>
        {user.map((item) => (
          <Card
            key={item.id}
            Name={`${item.first_name} ${item.last_name} `}
            email={item.email}
            imageUrl={item.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
