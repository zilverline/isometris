import React, { Component } from 'react';
import Block from './Block';

class Shape extends Component {

  render() {
    let { color } = this.props;

    return (
      <div className={["shape"]}>
        <Block color={color} />
        <Block color={color} />
        <Block color={color} />
      </div>
    );
  }
}

export default Shape;
