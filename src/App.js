import './App.css';
import StarshipDetails from './Components/Starship/Starship';
import { Routes, Route } from 'react-router-dom'
import Starships from "./Components/Starships/StarshipList"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Starships />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
