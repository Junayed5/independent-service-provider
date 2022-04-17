import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Services from './component/Services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Services/>}></Route>
        <Route path='/home' element={<Services/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
