import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Hotel from './Pages/Hotel/Hotel';
import List from './Pages/List/List';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<List/>}/>
      <Route path='/hotels/:id' element={<Hotel/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
