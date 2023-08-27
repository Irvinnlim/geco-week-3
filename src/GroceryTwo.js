import React from "react";

const GroceryTwo = ({ props }) => {
  const { groceries } = props;

  return (
    <>
      <h1>Received Groceries</h1>
      <ul>
        {groceries.map((item) => (
          <li key={item.id}>
            {item.id} {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GroceryTwo;
