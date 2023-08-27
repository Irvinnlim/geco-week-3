import React, { Component } from "react";
import data from "./data";
import "./App.css";
import Fruit from "./Fruit";
import Grocery from "./Grocery";

class App extends Component {
  state = {
    hoveredEmployee: null,
    groceries: [
      { id: 1, name: "Milk" },
      { id: 2, name: "Cereal" },
      { id: 3, name: "Strawberries" },
    ],
    fruit: { name: "Apple", price: 10 },
  };

  handleDisplay = (employee) => {
    this.setState({ hoveredEmployee: employee });
  };

  handleCloseDisplay = () => {
    this.setState({ hoveredEmployee: null });
  };

  render() {
    const { hoveredEmployee } = this.state;

    return (
      <>
        <h1>Employee List</h1>
        <ul>
          {data.employees.map((employee) => (
            <li key={employee.id}>
              <img src={employee.img} alt={employee.name} />
              <p
                onMouseEnter={() => this.handleDisplay(employee)}
                onMouseLeave={this.handleCloseDisplay}
              >
                Name: {employee.fullName}
              </p>
              <p>Designation: {employee.designation}</p>
            </li>
          ))}
        </ul>

        {hoveredEmployee && (
          <div className="modal">
            <img src={hoveredEmployee.img} alt={hoveredEmployee.name} />
            <p>Name: {hoveredEmployee.fullName}</p>
            <p>Age: {hoveredEmployee.age}</p>
            <p>DOB: {hoveredEmployee.dob}</p>
            <p>Salary: {hoveredEmployee.salary}</p>
            <p>Designation: {hoveredEmployee.designation}</p>
            <p>Department: {hoveredEmployee.dept}</p>
          </div>
        )}
        <Grocery groceries={this.state.groceries} />
        <Fruit fruit={this.state.fruit} />
      </>
    );
  }
}

export default App;
