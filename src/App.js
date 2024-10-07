import "./App.css";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardEl = data.map((item, index) => {
    return <Card key={index} {...item} />;
  });

  return <div className="App">
    <nav>My Travel Journal</nav>
    {cardEl}</div>;
}

export default App;
