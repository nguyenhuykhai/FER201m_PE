import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./component/Layout";
import Header from "./component/Layout/Header";
import Detail from "./component/pages/Detail";
import List from "./component/pages/List";
import News from "./component/pages/News";
import Login from './component/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <DefaultLayout>
            <List />
          </DefaultLayout>
        } />

        <Route path="/detail/:id" element={
          <DefaultLayout>
            <Detail />
        </DefaultLayout>
        } />

        <Route path="/news" element={
          <DefaultLayout>
          <News />
        </DefaultLayout>
        } />

        <Route path="/login" element={
          <DefaultLayout>
          <Login />
        </DefaultLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
