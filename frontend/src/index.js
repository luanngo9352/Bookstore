import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import './assets/styles/bootstrap.custom.css';
//import './assets/styles/index.css';
import './App.css';
import App from './App';
import Home from './pages/Home';
import ProductScreem from './screens/ProductScreem';
import ProductGridScreen from './screens/ProductGridScreen';
import LoginScreen from './screens/LoginScreen';

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element = { <App />}>
      <Route  index = {true} path="/" element = { <Home />} />
      <Route  path="/product/:id" element = { <ProductScreem />} />
      <Route path="/all-product" element={< ProductGridScreen/>}/>
      <Route path="/login" element={< LoginScreen/>}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

