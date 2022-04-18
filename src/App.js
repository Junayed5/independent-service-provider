import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './component/Checkout/Checkout';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Services from './component/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
       {/* <Route path='/' element={<Banner></Banner>}></Route> */}
       <Route path='/' element={<Services></Services>}></Route>
       <Route path='/checkout' element={<Checkout></Checkout>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register'></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
