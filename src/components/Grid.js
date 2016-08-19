import React, { Component } from 'react';
import Shape from './Shape';
import './Grid.css';

class Grid extends Component {
  render() {
    let { width, height } = this.props;

    return (
      <div className="grid">
        <Shape color="red" />
        <Shape color="red" />
        <Shape color="red" />
      </div>
    );
  }
}

export default Grid;
