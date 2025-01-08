import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Home from "./pages/home/Home";
  import List from "./pages/list/List";
  import Artist from "./pages/artist/Artist"
  import Login from "./pages/login/Login";
  import Register from "./pages/register/Register";
  import About from "./pages/about/About";
  import Contact from "./pages/contact/Contact";
  import Checkedsuccess from "./pages/checkedsuccess/Checkedsuccess";
  
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/artists" element={<List/>}/>
          <Route path="/artists/:id" element={<Artist/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/checkout-success" element={<Checkedsuccess/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;