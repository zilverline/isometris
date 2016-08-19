import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tetrimino from './Tetrimino';
import './Grid.scss';
import { spawnTetrimino } from '../actions';

export class Grid extends Component {
  render() {
    return (
      <div className="grid">
        {this.props.tetriminos.map((t) => <Tetrimino key={t.createdAt} shape={t.shape} />)}
        <button onClick={this.props.onButtonClick}>Spawn tetrimino</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ tetriminos: state.tetriminos })

const mapDispatchToProps = (dispatch) => (
  { onButtonClick: () => dispatch(spawnTetrimino) }
);

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
