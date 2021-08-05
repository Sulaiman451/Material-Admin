import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import "./App.css";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others">Other Pages</div>
      </div>
    </div>
  );
}

export default App;
