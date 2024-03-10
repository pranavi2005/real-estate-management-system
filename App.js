import abtbg from './components/gallery/abtbg.jpg'
import { Routes, Route } from "react-router-dom";
import Crudr from '../src/components/Crudr';
import GoogleMaps from '../src/components/GoogleMaps';
import PropertyDetails from '../src/components/PropertyDetails';
import Show from '../src/components/Show';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Navbar from '../src/components/Navbar';
import ImageSlider from '../src/components/imagesSlider';
import images from '../src/components/images';
import Delete from '../src/components/Delete';
function App() {
  return (
    <div className="App" style={{
      backgroundImage: 'url('+abtbg+')',
      backgroundSize:"cover",
      height: "500vh",
     
     }}
      >
      <Navbar/>
      <h3>Manage your Properties with various users all over the Nation</h3>
      <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='About-us' element={<ImageSlider images={images}/>}/>
        <Route path='Maps' element={<GoogleMaps />}/>
        <Route path='Property Details' element={<PropertyDetails />}/>
        <Route path='UPLOAD' element={<Show />}/>
        <Route path='DELETE' element={<Delete />}/>
        <Route path='sign-up' element={<Crudr />}/>
        <Route path='log-in' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;