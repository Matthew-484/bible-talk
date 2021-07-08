import "./App.css";
import NavBar from "./components/navbar";
import home from "./Webpages/home";
import Btalk from "./Webpages/B-talk";
import { Route } from "react-router-dom";
import "./App.css";

//FIX OVERLAPPING DIVS!!!!!!!!!

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <Route exact path="/" component={home} />
      <Route exact path="/Btalk" component={Btalk} />
    </div>
  );
}

export default App;
