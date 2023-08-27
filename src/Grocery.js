import React from "react";
import PropTypes from "prop-types";

const Grocery = (props) => {
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

Grocery.propTypes = {
  groceries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default Grocery;
