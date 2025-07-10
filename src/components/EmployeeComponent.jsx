import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  UpdateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const title = id ? "Update Employee" : "Add Employee";

  useEffect(() => {
    if (id) {
      console.log("Fetching data for ID:", id);
      getEmployee(id)
        .then((response) => {
          console.log(response.data);
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  function addOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      if (id) {
        UpdateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      navigate("/ems-frontend/", { state: { shouldReload: true } });
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "Required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h2 className="text-center mb-4 text-dark">{title}</h2>
            <form>
              <div className="form-group mb-3">
                <label>First Name</label>
                <input
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-3">
                <label>Last Name</label>
                <input
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-success w-100"
                    type="submit"
                    onClick={addOrUpdateEmployee}
                  >
                    Submit
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-dark w-100"
                    type="button"
                    onClick={() => navigate("/ems-frontend/")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeComponent;
