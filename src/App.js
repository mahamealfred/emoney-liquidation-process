import "./App.css";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ChangePassword from "./pages/Auth/ChangePassword";
import ListTrsansfer from "./pages/transfer/ListTrsansfer";
import BankReconciliationForm from "./pages/bankreconciliation/BankReconciliationForm";
function App() {
  return (
    <Router>
       <Topbar />
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/changepassword">
            <ChangePassword />
          </Route>
        </Switch>
        <div className="container">
        <Switch>
          <Route exact path="/authorizedtransfer">
            <ListTrsansfer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/bankreconciliation">
            <BankReconciliationForm />
          </Route>
        </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
