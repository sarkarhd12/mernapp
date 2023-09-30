
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'


import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom"
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';


function App() {
  return (
       <CartProvider>
        <Router>
          <div>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/login' element={<LogIn/>}/>
              <Route exact path='/createuser' element={<SignUp/>}/>
              <Route exact path='/myOrder' element={<MyOrder/>}/>
            </Routes>
          </div>
        </Router>
       </CartProvider>
   

  );
}

export default App;
