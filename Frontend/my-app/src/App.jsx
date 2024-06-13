 
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Coutry from "./components/visual/Coutry";
import Itensity from "./components/visual/Itensity";
import Region from "./components/visual/Region";
import Topic from "./components/visual/Topic";
import Livelihood from "./components/visual/Livelihood";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/country" element={<Coutry />} />
          <Route path="/itensity" element={<Itensity />} />
          <Route path="/region" element={<Region />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/livelihood" element={<Livelihood />} />

        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
