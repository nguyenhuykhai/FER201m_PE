import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/pages/Home";
import Contact from "./component/pages/Contact";
import Header from './component/pages/Header'
import Detail from './component/pages/Detail'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <Home/>
        } />

        <Route path="/contact" element={
          <Contact />
        } />

```````<Route path="/detail/:id" element={
          <Detail />
        } />```````
      </Routes>
    </Router>
  );
}

export default App;
