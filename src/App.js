import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Men from './Components/Men';
import Women from './Components/Women';
import Kids from './Components/Kids';
import Fashion from './Components/Fashion';
import AddProducts from './Components/AddProducts';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/men" element={<Men />} />
      <Route exact path="/women" element={<Women />} />
      <Route exact path="/kids" element={<Kids />} />
      <Route exact path="/fashion" element={<Fashion />} />
      <Route exact path="/addproducts" element={<AddProducts />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
