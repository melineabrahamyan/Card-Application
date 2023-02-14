import Header from "./components/header";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Instructions from "./components/instructions";
import Provider from "./context";

function App() {
  return (
    <div>
      <Provider>
        <Header />
        <Cards />
        <Footer />
      </Provider>
      <Instructions />
    </div>
  );
}

export default App;
