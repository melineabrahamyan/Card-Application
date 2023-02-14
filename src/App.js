import Header from "./components/header";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Instructions from "./components/instructions";
import Provider from "./context";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <div className="main-container">
        <Provider>
          <Header />
          <Cards />
          <Footer />
        </Provider>
      </div>
      <div className="instructons">
        <Instructions />
      </div>
    </div>
  );
}

export default App;
