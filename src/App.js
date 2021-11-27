import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import SideBar from "./components/sidebar/sideBar";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <SideBar />
        <Menu />
      </div>
    </>
  );
}

export default App;
