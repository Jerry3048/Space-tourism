import { BrowserRouter, Route, Routes } from 'react-router';
import Index from './Pages/Home';
import Destination from './Pages/Destination';

function App() {
  return (
 <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Index/>} />
        <Route Index path='/' element={<Destination/>} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App