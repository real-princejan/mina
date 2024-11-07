import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./components/About";


const App = () => {
  return (
 
   <div className='bg-custom-bg bg-cover bg-center min-h-screen'>
       <Routes>
       <Route path='/' element={<Homepage />} />
       <Route path='/about' element={<About />} />
     </Routes>
   </div>
  );
 };

export default App;
