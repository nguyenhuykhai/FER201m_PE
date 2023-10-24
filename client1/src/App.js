import './App.css';
import { Players } from './Player'
import { useEffect, useState } from 'react'
import Content2 from './component/Content2'

function ContentCard(props) {
  return (
    <div className="content-card">
      <h2>{ props.title || "Title of the Content Card" }</h2>
      <p>{ props.detail || "This is the content of the card. You can add more text and elements here." }</p>
    </div>
  );
}

// HEADER COMPONENT
function Header(props) {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer(props) {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Company Name</p>
    </footer>
  );
}

function App() {
  const [data, setData] = useState(Players);
  const [flag, setFlag] = useState(false)

  function handlePlayer(data) {
    const data2 = data.sort((a, b) => a.itemM > b.itemM ? 1 : -1)
    console.log("COUNT: ", data2);
    setData(data2)
  }

  useEffect(() => {
    handlePlayer(Players);
    setFlag(true);
  },[])
  
  return (
    <div className="App">
      <Header></Header>
      { flag ? data.map(item => (
        <Content2 title={item.name} detail={item.club}></Content2>
      )) : <div>Ipsum tempor dolore proident ut nostrud et. Laborum duis consequat esse amet. Sit nulla eu officia culpa excepteur ex qui.</div>}
      <Footer></Footer>
    </div>
  );
}

export default App;
