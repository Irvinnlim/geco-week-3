import React, { Component } from "react";
import PropTypes from "prop-types";

class Fruit extends Component {
  render() {
    return (
      <>
        <h1>Received Fruit</h1>
        <p>
          I received an {this.props.fruit.name} which costs $
          {this.props.fruit.price}
        </p>
      </>
    );
  }
}

Fruit.propTypes = {
  fruit: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Fruit;
