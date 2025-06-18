import logo from './logo.svg';
import './App.css';

function App() {
  const user = {
    Name: 'Yurii Ostrik',
    Age: '98',
    Number: '098 343 34 33'
  };
  const City ={
    Name: 'Odesa',
    Country: 'Ukrain',
    Age: '1798'
  }

  return (
    <div className="App">
      <p>{user.Name}</p>
      <p>{user.Age}</p>
      <p>{user.Number}</p>
      <br/>
      <p>{City.Name}</p>
      <p>{City.Country}</p>
      <p>{City.Age}</p>
    </div>
  );
}

export default App;
