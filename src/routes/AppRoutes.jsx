import { Route, Routes} from 'react-router-dom';
import HomePage from "../pages/HomePage/Home";
import Menu from "../pages/MenuPage/Menu";
import About from "../pages/AboutPage/About";
import Contact from "../pages/Contact/Contact";
import Productpage from "../pages/Productpage/Productpage";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/product/:id" element={<Productpage />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;