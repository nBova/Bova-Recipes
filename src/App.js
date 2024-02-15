import './CSS/App.css';
import { Routes, Route} from "react-router-dom";
import Layout from './pages/Layout';
import Recipes from './pages/Recipes';
import Blogs from './pages/Blogs';
import Home from './pages/Home';

function App() { 
  return(
    <>
    <Layout />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
    </>
  );
}

export default App;
