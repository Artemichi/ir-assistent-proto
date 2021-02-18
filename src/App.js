import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Auth } from "./context";
import { Login, Main, PrivateRoute } from "./routes";

const App = () => {
  const [login, setLogin] = useState(null);
  return (
    <div className="App">
      <Auth.Provider value={{ login, setLogin }}>
        <Router>
          <PrivateRoute exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Router>
      </Auth.Provider>
    </div>
  );
};

export default App;
