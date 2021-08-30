import './App.css';

const like = ["acordar" , "fazer café", "escovar os dentes", "estudar"]



const Task = (value) => {
  return (
    value.map((element) => <li>{ element }</li>  )
  );
}

function App() {
  return (
    <ol>
      { Task(like) }
    </ol>
  );
}

export default App;
