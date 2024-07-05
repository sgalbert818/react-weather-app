import './App.css';
import Card from "./components/Card.js";
import weatherData from "./weatherData.js";

function App() {
  const citiesArray = weatherData.map((city) => {
    return (
      <Card 
      key={city.id}
      city={city}
      />
    )
  })
  return (
    <div className="App">
      {citiesArray}
    </div>
  );
}

export default App;
