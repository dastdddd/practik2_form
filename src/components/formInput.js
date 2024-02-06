import React, { useState } from "react";

const initialState = {
  login: "",
  password: "",
  phone: "",
  email: "",
  adress: "",
};

let styles = {
  color: 'red',
  fontSize: '15px',
}

const FormInput = () => {
  const [form, setForm] = useState(initialState);
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    setData(form)
    setForm(initialState)
    
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="login"
        value={form.login}
        placeholder="login"
      />
      <input
        onChange={handleChange}
        type="text"
        name="password"
        value={form.password}
        placeholder="password"
      />
      <input
        onChange={handleChange}
        type="text"
        name="phone"
        value={form.phone}
        placeholder="phone"
      />
      <input
        onChange={handleChange}
        type="text"
        name="email"
        value={form.email}
        placeholder="email"
      />
      <input
        onChange={handleChange}
        type="text"
        name="adress"
        value={form.adress}
        placeholder="adress"
      />
      <button type="submit">add</button>
      <br />
      <h3>login: <span style={styles}>{data.login}</span> </h3>
      <h3>password: <span style={styles}>{data.password}</span></h3>
      <h3>phone: <span style={styles}>{data.phone}</span></h3>
      <h3>email: <span style={styles}>{data.email}</span></h3>
      <h3>adress: <span style={styles}>{data.adress}</span></h3>
    </form>
  );
};

export default FormInput;
