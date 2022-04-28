import Header from "./components/header/Header";
import Form from "./components/body/Form";
import Footer from "./components/footer/Footer";
import Illustration from "./components/body/Illustration";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <Illustration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
