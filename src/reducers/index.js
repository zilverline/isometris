const reducer = (state = {current: null, board: []}, action) => {
  switch (action.type) {

    case 'TICK':
      return update(state, clone, spawnTetrimino, moveToBoard, setCurrentY);

    default:
      return state;
  }
}

const update = (state, ...transformations) => transformations.reduce((s, transformer) => transformer(s), state);

const clone = (state) => Object.assign({}, state);

const spawnTetrimino = (state) => {
  if (state.current == null)
    state.current = randomTetrimino();

  return state;
};

const randomTetrimino = () => (
  {
    shape: ['I', 'J', 'L', 'O', 'S', 'T', 'Z'][Math.floor(Math.random()*7)],
    x: 5,
    y: 0,
    createdAt: Date.now()
  }
);

const setCurrentY = (state) => {
  if (state.current)
    state.current = Object.assign({}, state.current, { y: state.current.y + 1 });
  return state;
}

const moveToBoard = (state) => {
  if (state.current.y > 10) {
    state.board = [...state.board, state.current];
    state.current = null;
  }
  return state;
}

export default reducer;
