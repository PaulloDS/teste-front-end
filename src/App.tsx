import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Parceiros from "./components/Parceiros/Parceiros";
import Marcas from "./components/Marcas/Marcas";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Products isFirstTime={true} />
        <Parceiros />
        <Products isFirstTime={false} />
        <Parceiros />
        <Marcas />
        <Products isFirstTime={false} />
      </main>
      <Footer />
    </>
  );
}

export default App;
