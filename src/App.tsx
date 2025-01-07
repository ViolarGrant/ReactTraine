import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </>
  );
}

export default App;
