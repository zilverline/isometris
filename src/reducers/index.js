const reducer = (state = {current: null, board: [], tick: 0}, action) => {
  switch (action.type) {

    case 'TICK':
      return update(state, clone, incrementTick, spawnTetrimino, moveToBoard, setCurrentY);

    case 'MOVE_LEFT':
      return update(state, clone, setCurrentX(-1));

    case 'MOVE_RIGHT':
      return update(state, clone, setCurrentX(1));

    case 'ROTATE':
    return state;

    case 'DROP':
      return update(state, clone, drop);

    default:
      return state;
  }
}

const update = (state, ...transformations) => transformations.reduce((s, transformer) => transformer(s), state);

const clone = (state) => Object.assign({}, state);

const incrementTick = (state) => {
  state.tick += 1;
  return state;
}

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

const setCurrentX = (deltaX) => ((state) => {
  if (state.current)
    state.current = Object.assign({}, state.current, { x: state.current.x + deltaX });
  return state;
})

const setCurrentY = (state, drop=false) => {
  if (state.current && (drop || !(state.tick % 10)))
    state.current = Object.assign({}, state.current, { y: state.current.y + 1 });
  return state;
}

const moveToBoard = (state) => {
  if (state.current.y > 15) {
    state.board = [...state.board, state.current];
    state.current = null;
  }
  return state;
}

const drop = (state) => {
  return setCurrentY(state, true);
}

export default reducer;
