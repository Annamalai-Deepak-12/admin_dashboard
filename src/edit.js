import React from "react";

function Edit() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Username</label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Email</label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Country</label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>State</label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>City</label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Phone</label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Date of Birth</label>
            <input type={"date"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Gender</label>
            <select className="form-control">
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
  );
}

export default Edit;
