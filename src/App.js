import './App.css';
import Form from './components/form';
import Header from './components/header';
import List from './components/list';
import Stats from './components/stats';

function App() {
  return (
    <div className='cust-container'>
      <Header />
      <Form />
      <List />
      <Stats />
    </div>
  );
}

export default App;
