import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  // Store all employees
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({
  fname: "",
  lname: "",
  age: "",
  salary: "",
  city: "",
  state: ""
});

  // When page loads, get all employees
  useEffect(() => {
    getEmployees();
  }, []);

  //create employeee
  const createEmployee = async () => {
  try {

    const response = await axios.post(
      "http://localhost:9999/api/v1/createEmp",
      employee
    );

    console.log(response.data);

    alert("Employee Created Successfully");

    getEmployees();

  } catch (error) {

    console.log(error);

  }
};


//Update Employee
const updateEmployee = async (eid) => {
  try {
    const response = await axios.put(
      `http://localhost:9999/api/v1/update/${eid}`,
      employee
    );

    console.log(response.data);

    alert("Employee Updated Successfully");

    getEmployees();

  } catch (error) {
    console.log(error);
  }
};

//delete employee
const deleteEmployee = async (eid) => {
  try {
    await axios.delete(
      `http://localhost:9999/api/v1/delete/${eid}`
    );

    alert("Employee Deleted Successfully");

    getEmployees();

  } catch (error) {
    console.log(error);
  }
};


//search found
const searchEmployee = async (fname) => {
  try {
    const response = await axios.get(
      `http://localhost:9999/api/v1/getEmp/fname/${fname}`
    );

    console.log(response.data);

  } catch (error) {
    console.log(error);
  }
};

  // GET ALL EMPLOYEES
  const getEmployees = async () => {
    try {

      const response = await axios.get(
        "http://localhost:9999/api/v1/getEmpList"
      );

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  // GET SINGLE EMPLOYEE
  const getEmployee = async (eid) => {
    try {

      const response = await axios.get(
        `http://localhost:9999/api/v1/getEmp/${eid}`
      );

      console.log(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div>

      <h1>Employee Management System</h1>

      <h2>Add Employee</h2>

<input
  placeholder="First Name"
  value={employee.fname}
  onChange={(e) =>
    setEmployee({
      ...employee,
      fname: e.target.value
    })
  }
/>

<br />

<input
  placeholder="Last Name"
  value={employee.lname}
  onChange={(e) =>
    setEmployee({
      ...employee,
      lname: e.target.value
    })
  }
/>

<br />

<input
  type="number"
  placeholder="Age"
  value={employee.age}
  onChange={(e) =>
    setEmployee({
      ...employee,
      age: e.target.value
    })
  }
/>

<br />

<input
  type="number"
  placeholder="Salary"
  value={employee.salary}
  onChange={(e) =>
    setEmployee({
      ...employee,
      salary: e.target.value
    })
  }
/>

<br />

<input
  placeholder="City"
  value={employee.city}
  onChange={(e) =>
    setEmployee({
      ...employee,
      city: e.target.value
    })
  }
/>

<br />

<input
  placeholder="State"
  value={employee.state}
  onChange={(e) =>
    setEmployee({
      ...employee,
      state: e.target.value
    })
  }
/>

<br />

<button onClick={createEmployee}>
  Add Employee
</button>

      <h2>Employee List</h2>

      <table border="1">

        <thead>
          <tr>

            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>City</th>
            <th>State</th>
            <th>Action</th>

          </tr>
        </thead>

        <tbody>

          {employees.map((employee) => (

            <tr key={employee.eid}>

              <td>
              <button onClick={() => deleteEmployee(employee.eid)}>
               Delete
              </button>
              </td>

              <td>{employee.eid}</td>
              <td>{employee.fname}</td>
              <td>{employee.lname}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;