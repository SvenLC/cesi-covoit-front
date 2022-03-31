import './App.css';
import AppBar from './components/appBar/appBar.js';
import AppButtonSearch from './components/appButtonSearch/appButtonSearch.js';
import AppCard from './components/appCard/appCard.js';
import AppTextField from './components/appTextField/appTextField.js';

function App() {
  return (
    <div className="App">
      <AppBar className="AppBar" />
      <header>
        <AppTextField />
        <AppButtonSearch />
        {/* <AppButtonAdd /> */}
      </header>
      <div>
        <AppCard />
      </div>
    </div>
  );
}

export default App;
