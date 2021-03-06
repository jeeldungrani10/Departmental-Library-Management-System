import Home from "./Components/Home/home";
import Addbook from "./Components/AddBook/Addbook";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Route path="/" component={Home} exact />
          <Route path="/addbook" component={Addbook} exact />
        </div>
      </Router>
    </div>
  );
}

export default App;
