import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section className="app-container d-flex flex-column align-items-center">
      <NavBar />
      <ItemListContainer
        greeting={'Bienvenidos a morf.ar, tu comida favorita a un click'}
      />
    </section>
  );
}

export default App;
