import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tetrimino from './Tetrimino';
import './Grid.scss';
import { tick } from '../actions';

export class Grid extends Component {
  componentDidMount() {
    this.tick = setInterval(this.props.onTick, 500);
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
}

const renderTetromino = (t) =>
  <div key={t.createdAt} className='tetrimino-wrapper' style={{ top: `${t.y}em`, left: `${t.x}em` }}>
    <Tetrimino shape={t.shape} />
  </div>


const mapStateToProps = (state) => ({
  board: state.board,
  current: state.current
});

const mapDispatchToProps = (dispatch) => ({ onTick: () => dispatch(tick) });

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
