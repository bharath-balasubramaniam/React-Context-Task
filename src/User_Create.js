import React from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./UserContext";
export default function User_Create() {
  let [name, setname] = useState("");
  let [position, setposition] = useState("");
  let [office, setoffice] = useState("");
  let [age, setage] = useState("");
  let [date, setdate] = useState("");
  let [salary, setsalary] = useState("");

  let data = useContext(UserContext);
  let listAppend = (e) => {
    e.preventDefault();
    data.setlist([...data.list, { name, position, office, age, date, salary }]);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={listAppend}>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <h2>User Form</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                type="text"
                className="form-control"
                value={position}
                onChange={(e) => setposition(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type="text"
                className="form-control"
                value={office}
                onChange={(e) => setoffice(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <label>age</label>
              <input
                type="number"
                maxLength="2"
                className="form-control"
                value={age}
                onChange={(e) => setage(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setdate(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <label>salary</label>
              <input
                type="text"
                className="form-control"
                value={salary}
                onChange={(e) => setsalary(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <button className="btn btn-primary mt-5" id="user_reg">
                  Submit!
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
