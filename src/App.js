import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { User } from "./components/context";
import { Login, Main, PrivateRoute } from "./components/routes";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <User.Provider value={{ get: user, set: setUser }}>
        <Router>
          <PrivateRoute exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Router>
      </User.Provider>
    </div>
  );
};

export default App;
