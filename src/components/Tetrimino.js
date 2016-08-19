import React, { Component } from 'react';
import Block from './Block';
import './Tetrimino.scss'

class Tetrimino extends Component {
  render() {
    const { shape } = this.props;

    return this[shape]();
  }

  I() {
    return (
      <div className={`tetrimino I`}>
        <Block color='red' />
        <Block color='red' />
        <Block color='red' />
        <Block color='red' />
      </div>
    );
  }

  J() {
    return (
      <div className={`tetrimino J`}>
        <Block color='transparent' />
        <Block color='yellow' />

        <Block color='transparent' />
        <Block color='yellow' />

        <Block color='yellow' />
        <Block color='yellow' />
      </div>
    );
  }

  L() {
    return (
      <div className={`tetrimino L`}>
        <Block color='magenta' />
        <Block color='transparent' />

        <Block color='magenta' />
        <Block color='transparent' />

        <Block color='magenta' />
        <Block color='magenta' />
      </div>
    );
  }

  O() {
    return (
      <div className={`tetrimino O`}>
        <Block color='blue' />
        <Block color='blue' />
        <Block color='blue' />
        <Block color='blue' />
      </div>
    );
  }

  S() {
    return (
      <div className={`tetrimino S`}>
        <Block color='transparent' />
        <Block color='cyan' />
        <Block color='cyan' />

        <Block color='cyan' />
        <Block color='cyan' />
        <Block color='transparent' />
      </div>
    );
  }

  T() {
    return (
      <div className={`tetrimino T`}>
        <Block color='lime' />
        <Block color='lime' />
        <Block color='lime' />

        <Block color='transparent' />
        <Block color='lime' />
        <Block color='transparent' />
      </div>
    );
  }

  Z() {
    return (
      <div className={`tetrimino Z`}>
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

export const I = () => <Tetrimino shape='I' />
export const J = () => <Tetrimino shape='J' />
export const L = () => <Tetrimino shape='L' />
export const O = () => <Tetrimino shape='O' />
export const S = () => <Tetrimino shape='S' />
export const T = () => <Tetrimino shape='T' />
export const Z = () => <Tetrimino shape='Z' />
