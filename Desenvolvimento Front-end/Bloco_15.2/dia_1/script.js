const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type){
    case 'NEXT_COLOR':
      return (state.index === 5) ? {...state, index: 0}: {...state, index: state.index + 1};
    case 'PREVIOUS_COLOR':
      return (state.index === 0) ? {...state, index: 5} : {...state, index: state.index - 1};
    case 'RANDOM_COLOR':
      const num = Math.floor(Math.random() * 5)
      return  {...state, index: num}
    default:
      return state;
  }
}
const store = Redux.createStore(reducer);

document.getElementById('next').addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' })
})

document.getElementById('previous').addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' })
})

document.getElementById('random').addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR', colors: criarCor()})
})

const div = document.getElementById('container')
const color = document.getElementById('value')

store.subscribe(() => {
  console.log('State was changed');
  const positionColor = store.getState().index
  color.innerHTML = store.getState().colors[positionColor]
  div.style.backgroundColor = store.getState().colors[positionColor]
});
