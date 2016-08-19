import React, { Component } from 'react';
import { L } from './Tetrimino';
import './Grid.scss';

class Grid extends Component {
  render() {
    let { width, height } = this.props;

    return (
      <div className="grid">
        <L />
      </div>
    );
  }
}

export default Grid;
