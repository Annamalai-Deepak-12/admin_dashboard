import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function Usercreate() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      dob: "",
      gender: "",
    },
    onSubmit: async(values) => {
      try {
        const userdata = await axios.post("https://644efb15b61a9f0c4d1a7e1a.mockapi.io/users",values);
        alert("Success")
      } catch (error) {
        alert("Error")
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Username</label>
              <input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <input
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <input
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <input
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                name="dob"
                onChange={formik.handleChange}
                value={formik.values.dob}
                type={"date"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option></option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Usercreate;
