import logo from './logo.svg';
import './App.css';


function Article(props) {
  console.log(props);
  return (
    <div>
      <img style={{height:"100px", width: "100px"}} src={props.image}/>
      <h1 style={{ backgroundColor:"red"}}>{props.title || "HELLO!!!"}</h1>
      <h2>{props.detail}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Article image="https://images.unsplash.com/photo-1697081544006-c5bb266e3940?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec malesuada nisi. Maecenas id tortor eu nunc luctus malesuada ac ut ex."></Article>
      <Article image="https://plus.unsplash.com/premium_photo-1675700427405-f4cf90589055?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Huynh Van B" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec malesuada nisi. Maecenas id tortor eu nunc luctus malesuada ac ut ex."></Article>
      <Article image="https://images.unsplash.com/photo-1697572801935-60d4a28a861b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Nguyen Van C" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec malesuada nisi. Maecenas id tortor eu nunc luctus malesuada ac ut ex."></Article>
    </div>
  );
}

export default App;
