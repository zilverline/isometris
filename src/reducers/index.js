const reducer = (state = {tetriminos: []}, action) => {
  switch (action.type) {
    case 'SPAWN_TETRIMINO':
      state.tetriminos = [...state.tetriminos, randomTetrimino()];
      return Object.assign({}, state);
    default:
      return state;
  }
}

const randomTetrimino = () => (
  {
    shape: ['I', 'J', 'L', 'O', 'S', 'T', 'Z'][Math.floor(Math.random()*7)],
    x: 5,
    y: 0,
    createdAt: Date.now()
  }
)

export default reducer;
