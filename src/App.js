import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'></img>
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Messages</div>
      </nav>
      <div className='content'>
        Main content
      </div>
    </div>
  );
}

export default App;
