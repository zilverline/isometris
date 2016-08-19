import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tetrimino from './Tetrimino';
import './Grid.scss';
import { tick, moveLeft, moveRight, rotate, drop } from '../actions';

export class Grid extends Component {
  componentDidMount() {
    this.tick = setInterval(this.props.onTick, 16);
    document.onkeypress = this.onkeypress.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    const { board, current } = this.props;

    return (
      <div className="grid">
        { current ? renderTetromino(current) : null }
        { board.map((t) => renderTetromino(t)) }
      </div>
    );
  }

  onkeypress(e) {
    if (e.key == 'a') this.props.moveLeft();
    if (e.key == 'd') this.props.moveRight();
    if (e.key == 'w') this.props.rotate();
    if (e.key == 's') this.props.drop();
    return true;
  }
}

const renderTetromino = (t) =>
  <div key={t.createdAt} className='tetrimino-wrapper' style={{ top: `${t.y}em`, left: `${t.x}em` }}>
    <Tetrimino shape={t.shape} />
  </div>

const mapStateToProps = (state) => ({
  board: state.board,
  current: state.current
});

const mapDispatchToProps = (dispatch) => ({
  onTick: () => dispatch(tick),
  moveLeft: () => dispatch(moveLeft),
  moveRight: () => dispatch(moveRight),
  rotate: () => dispatch(rotate),
  drop: () => dispatch(drop),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
