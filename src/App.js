import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './component/Banner/Banner';
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
        <Route path='/' element={<Banner />}></Route>
        <Route path='/home' element={<Banner />}></Route>
        <Route path='/' element={<Services />}></Route>
        <Route path='/home' element={<Services />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
