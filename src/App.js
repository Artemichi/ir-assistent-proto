import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { userContext } from "./context";
import { Login, Main, PrivateRoute } from "./routes";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <userContext.Provider value={{ get: user, set: setUser }}>
        <Router>
          <PrivateRoute exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Router>
      </userContext.Provider>
    </div>
  );
};

export default App;
