import React, { Component } from 'react';
import Block from './Block';
import './Tetrimino.scss'

class Tetrimino extends Component {
  render() {
    const { shape, rotation } = this.props;

    return this[shape](rotation);
  }

  I(rotation) {
    return (
      <div className={`tetrimino I rotate-${rotation}`}>
        <Block color='red' />
        <Block color='red' />
        <Block color='red' />
        <Block color='red' />
      </div>
    );
  }

  J(rotation) {
    return (
      <div className={`tetrimino J rotate-${rotation}`}>
        <Block color='transparent' />
        <Block color='yellow' />

        <Block color='transparent' />
        <Block color='yellow' />

        <Block color='yellow' />
        <Block color='yellow' />
      </div>
    );
  }

  L(rotation) {
    return (
      <div className={`tetrimino L rotate-${rotation}`}>
        <Block color='magenta' />
        <Block color='transparent' />

        <Block color='magenta' />
        <Block color='transparent' />

        <Block color='magenta' />
        <Block color='magenta' />
      </div>
    );
  }

  O(rotation) {
    return (
      <div className={`tetrimino O rotate-${rotation}`}>
        <Block color='blue' />
        <Block color='blue' />
        <Block color='blue' />
        <Block color='blue' />
      </div>
    );
  }

  S(rotation) {
    return (
      <div className={`tetrimino S rotate-${rotation}`}>
        <Block color='transparent' />
        <Block color='cyan' />
        <Block color='cyan' />

        <Block color='cyan' />
        <Block color='cyan' />
        <Block color='transparent' />
      </div>
    );
  }

  T(rotation) {
    return (
      <div className={`tetrimino T rotate-${rotation}`}>
        <Block color='lime' />
        <Block color='lime' />
        <Block color='lime' />

        <Block color='transparent' />
        <Block color='lime' />
        <Block color='transparent' />
      </div>
    );
  }

  Z(rotation) {
    return (
      <div className={`tetrimino Z rotate-${rotation}`}>
        <Block color='orange' />
        <Block color='orange' />
        <Block color='transparent' />

        <Block color='transparent' />
        <Block color='orange' />
        <Block color='orange' />
      </div>
    );
  }
}

export default Tetrimino;
export const I = (props) => <Tetrimino {...props} shape='I' />
export const J = (props) => <Tetrimino {...props} shape='J' />
export const L = (props) => <Tetrimino {...props} shape='L' />
export const O = (props) => <Tetrimino {...props} shape='O' />
export const S = (props) => <Tetrimino {...props} shape='S' />
export const T = (props) => <Tetrimino {...props} shape='T' />
export const Z = (props) => <Tetrimino {...props} shape='Z' />
