import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";
export default function Users() {
  let datab = useContext(UserContext);
  return (
    <>
      <h1>Users</h1>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Tables</h1>
        <p class="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a href="https://datatables.net">official DataTables documentation</a>
          .
        </p>
        <h4>
          <Link to="/components/User_Create">Create User</Link>
        </h4>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {datab.list.map((obj) => {
                    return (
                      <tr>
                        <td>{obj.name}</td>
                        <td>{obj.position}</td>
                        <td>{obj.office}</td>
                        <td>{obj.age}</td>
                        <td>{obj.date}</td>
                        <td>{obj.salary}</td>
                        <td>
                          <Link to="/components/User_Edit/2">User Edit</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
