import logo from "./logo.svg";
import "./App.css";
import { ContactUs } from "./Contact-us";
import { Home } from "./Home";
import { AboutUs } from "./About-us";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="nav-header">
          <div>Logo</div>
          <ul className="nav-list">
            <li className="list-item">
              {/* <a href="#home">HOME</a> */}
              <Link to="/">HOME </Link>
            </li>
            <li className="list-item">
              {/* <a href="#about-us">ABOUT US</a> */}

              <Link to="/about-us">AboutUs </Link>
            </li>
            <li className="list-item">
              {/* <a href="#contact-us">CONTACT US</a> */}
              <Link to="/contact-us">ContactUs </Link>
            </li>
            <li className="list-item">
              <button className="login-button">
                <a href="#login">Log in</a>
              </button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>{" "}
    </div>
  );
}

export default App;
