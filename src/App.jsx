import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BaseButton from "./components/Button/BaseButton";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <BaseButton />
        <BaseButton />
      </body>
      <Footer />
    </div>
  );
}

export default App;
