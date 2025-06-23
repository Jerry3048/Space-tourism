import { BrowserRouter, Route, Routes } from 'react-router';
import Index from './Pages/Home';
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';

function App() {
  return (
 <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Index/>} />
        <Route  path='/Destination' element={<Destination/>} />
        <Route path='/Crew' element={<Crew/>} />
        <Route path='/Technology' element={<Technology/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App