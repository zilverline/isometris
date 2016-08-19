import React, { Component } from 'react';
import './Block.scss';

class Block extends Component {
  render() {
    let { color } = this.props;

    return (
      <div className={`block ${color}`} />
    );
  }
}

export default Block;
