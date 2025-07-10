import React, { useState, useEffect } from "react";
import { getEmployees } from "../services/EmployeeService";
import EmployeeComponent from "./EmployeeComponent";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteEmployee } from "../services/EmployeeService";

function ListEmployeeComponent() {
  const [employees, SetEmployees] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    getEmployees()
      .then((response) => {
        SetEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigate("/ems-frontend/add-employee");
  }

  function updateEmployee(employeeId) {
    navigate(`/ems-frontend/update-employee/${employeeId}`);
  }

  function removeEmployee(employeeId) {
    console.log(employeeId);
    deleteEmployee(employeeId)
      .then((response) => {
        console.log(response.data);
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/ems-frontend/employees");
  }

  return (
    <div className="container container-fluid">
      <h2 className="text-center my-2">List Of Employees in DB</h2>
      <button
        type="button"
        className="btn btn-primary mb-2"
        onClick={addNewEmployee}
      >
        Add Employee
      </button>
      <table className="table table-striped table-bordered mb-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeeComponent;
