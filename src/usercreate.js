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
    validate: (values) => {
      let error = {};
      if (!values.name) {
        error.name = "Please enter a value";
      }
      if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
        error.name = "Username must be between 3 to 15 characters";
      }
      if (!values.email) {
        error.email = "Please enter an email";
      }

      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Please enter a valid email";
      }
      if(values.phone.toString().length !==10){
        error.phone="Please enter a valid phone number"
      }

      let age = new Date().getFullYear() - parseFloat(values.dob.split("-")[0])
      if(age<18){
        error.dob = "You must be above 18"
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "https://644efb15b61a9f0c4d1a7e1a.mockapi.io/users",
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Username *</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                  formik.touched.name && formik.errors.name ? "error-box" : ""
                } ${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type={"text"}
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? "error-box" : ""
                } ${
                  formik.touched.email && !formik.errors.email
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"number"}
                className={`form-control ${
                  formik.errors.phone ? "error-box" : ""
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                type={"date"}
                className={`form-control ${
                  formik.errors.dob ? "error-box" : ""
                } ${
                  formik.touched.dob && !formik.errors.dob
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
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
                <option>---Select One---</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
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
