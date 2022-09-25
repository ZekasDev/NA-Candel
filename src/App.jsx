import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BaseButton from "./components/Button/BaseButton";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <BaseButton />
        <BaseButton />
      </div>
      <Footer />
    </div>
  );
}

export default App;
