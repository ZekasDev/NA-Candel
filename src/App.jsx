import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BaseButton from "./components/Button/BaseButton";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <BaseButton text="venha para zekas"/>
        <BaseButton text="ele vai te ajudar"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
