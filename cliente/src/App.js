import './App.css'
import {Cart} from './pages/Cart';
import Home from './pages/Home';
import {Login} from './pages/Login';
import {Product} from './pages/Product';
import {ProductList} from './pages/ProductList';
import {Register} from './pages/Register';
import {BrowserRouter, link, Routes, Route, Navigate} from 'react-router-dom'
import Pay from './components/Pay';
import Success from './components/Success';

function App() {
  const user = true;
  return (
     <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:category' element={<ProductList/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          {user 
            ? <Route path='/login' element={<><Navigate to="/"/></>}/>
            : <Route path='/login' element={<Login/>}/> 
          }
          {user
            ? <Route path='/register' element={<><Navigate to="/"/></>}/>
            : <Route path='/register' element={<Register/>}/>
          }
          <Route path='/pay' element={<Pay/>}/>
          <Route path='/success' element={<Success/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
