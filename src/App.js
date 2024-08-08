import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <h4>The Way of the Samurai</h4>
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </div>
  );
}

export default App;
