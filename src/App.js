import './App.css';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import NotFound from './Shared/NotFound/NotFound';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Products from './Pages/Home/Products/Products';

function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
