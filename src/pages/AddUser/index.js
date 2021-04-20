import React, { useState } from "react";
import Button from "../../component/atom/Button";
import Input from "../../component/atom/Input";
import Navbar from "../../molekul/Navbar";
import Axios from "axios";

const AddUser = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const dataSub = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      avatar: "https://source.unsplash.com/random",
    };
    Axios.post("http://localhost:3004/users", dataSub);
  };

  return (
    <div className="container-md mt-4">
      <Navbar />
      <h3>Add USer</h3>
      <Input
        className="form-control form-control-sm"
        label="First name"
        placeholder="Masukan Nama Depan"
        value={firstname}
        onChange={(event) => setFirstname(event.target.value)}
      />
      <Input
        className="form-control form-control-sm"
        label="Last Name"
        placeholder="Masukan Nama Belakang"
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
      />
      <Input
        className="form-control form-control-sm"
        label="Email"
        placeholder="Masukan Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <Button onSubmit={handleSubmit} text="Add User" />
    </div>
  );
};

export default AddUser;
