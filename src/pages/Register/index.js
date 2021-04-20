import React, { useState } from "react";
import Button from "../../component/atom/Button";
import Input from "../../component/atom/Input";

const Register = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [notelepon, setNotelepon] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    const dataRegis = {
      nama: nama,
      username: username,
      email: email,
      notelepon: notelepon,
      address: address,
    };
    console.log(dataRegis);
  };

  return (
    <div className="container-md mt-4">
      <h3>Register</h3>

      <Input
        className="form-control"
        placeholder="Masukan Nama"
        label="Full Name"
        value={nama}
        onChange={(event) => setNama(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Masukan Username"
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Masukan Email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Masukan No Telepon"
        label="Phone Number"
        value={notelepon}
        onChange={(event) => setNotelepon(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Masukan Alamat"
        label="Address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <br />
      <Button onSubmit={handleSubmit} text="Register" />
    </div>
  );
};

export default Register;
