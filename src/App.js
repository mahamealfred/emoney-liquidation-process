import "./App.css";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ChangePassword from "./pages/Auth/ChangePassword";
import ListTrsansfer from "./pages/transfer/ListTrsansfer";
import BankReconciliationForm from "./pages/bankreconciliation/BankReconciliationForm";
function App() {
  const isAuth = localStorage.getItem("access-token");
  const userType = localStorage.getItem("userType");
  return (
    <Router>
      <Topbar />

      <div className="app">
        {!isAuth ? (
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        ) : (
          <></>
        )}
        <Switch>
          <Route exact path="/register">
            {!isAuth ? <Register /> : <>you are alredy Registerd</>}
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/changepassword">
            <ChangePassword />
          </Route>
        </Switch>
        {isAuth && userType === "Admin" ? (
          <>
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
          </>
        ) : (
          <></>
        )}
        {
          isAuth && userType==="Level1"?
          (
          <>
         <div className="container">
              <Switch>
                <Route exact path="/authorizedtransfer">
                  <ListTrsansfer />
                </Route>
              </Switch>
              
            </div>
            </>):(<></>)
}
      </div>
    </Router>
  );
}

export default App;
