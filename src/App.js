import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';

function App() {
  const todos = [
    { id: 1, title:'clean room', completed: false},
    { id: 2, title:'dishes', completed: true},
    { id: 3, title:'laundry', completed: false},
    { id: 4, title:'eat dinner', completed: true},
    { id: 5, title:'fix car', completed: false}
  ]
  return (
    <div className="App">
      <h1>Inside components folder make newfolder __tests__ files inside are named after components</h1>
      <h1></h1>
      <h1>npm i --save-dev @testing-library/react react-test-renderer</h1>
      {todos.map(todo => (
        <Todo key ={todo.id} todo={todo}/>

      ))}
    </div>
  );
}

export default App;
