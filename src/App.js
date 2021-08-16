import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import "./App.css";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/NewUser/NewUser";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/userId">
            <User />
          </Route>
          <Route path="/user/newUser">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
