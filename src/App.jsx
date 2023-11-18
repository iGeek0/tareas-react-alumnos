import './App.css'
import Loading from './components/Loading'
import AppRouter from './routes/AppRouter'
import { NavLink } from 'react-router-dom'


function App() {

  return (
    <>
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/agregar">Agregar</NavLink></li>
        <li><NavLink to="/listado">Listado</NavLink></li>
      </ul>
      <AppRouter />
    </>
  )
}

export default App
