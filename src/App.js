import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.scss';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title="Alimento Kitten Royal Canin"/>
      
    </div>
  );
}

export default App;
