

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import Shipment from './Components/Shipment/Shipment';
import Shop from './Components/Shop/Shop';
import SignUp from './Components/SignUp/SignUp';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/shipment" element={
          <RequiredAuth>
          <Shipment></Shipment>
          </RequiredAuth>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
