import './App.css'
import Navbar from './components/layout/NavBar/Navbar.jsx'
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"Hola como estás?"} />
    </div>
  )
}

export default App
