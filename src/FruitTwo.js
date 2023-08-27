import React, { Component } from "react";
import PropTypes from "prop-types";

class FruitTwo extends Component {
  render() {
    return (
      <>
        <h1>Received Fruit</h1>
        <p>
          I received {this.props.fruit.name} which cost $
          {this.props.fruit.price}
        </p>
      </>
    );
  }
}

FruitTwo.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default FruitTwo;
