import './App.css';
import { Route, Routes } from 'react-router-dom';
import TodoWrapper1 from './components/todo1/TodoWrapper1';
import TodoWrapper2 from './components/todo2/TodoWrapper2';
import TodoWrapper3 from './components/todo3/TodoWrapper3';
import Counter from './components/counter/Counter';

function App() {
  return (
    <Routes>
      <Route path='/todo1' element={<TodoWrapper1 />} />
      <Route path='/todo2' element={<TodoWrapper2 />} />
      <Route path='/' element={<TodoWrapper3 />} />
      <Route path='/counter' element={<Counter />} />
    </Routes>
  );
}

export default App;
