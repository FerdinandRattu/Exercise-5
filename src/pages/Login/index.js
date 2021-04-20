import React, { useState } from "react";
import Button from "../../component/atom/Button";
import Input from "../../component/atom/Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const dataSub = {
      username: username,
      password: password,
    };
    console.log(dataSub);
  };

  return (
    <div className="container-md mt-4">
      <h3>Login</h3>
      <Input
        className="form-control form-control-sm"
        label="Username"
        placeholder="Masukan username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        className="form-control form-control-sm"
        label="Password"
        placeholder="Masukan password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Button onSubmit={handleSubmit} text="Submit" />
    </div>
  );
};

export default Login;
