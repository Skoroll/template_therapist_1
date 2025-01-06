import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Banner from "./components/Banner.tsx";
import imgForBanner from "./assets/banner/dark-plant-background-free-photo.webp"
import { LangProvider } from "./context/LangContext.tsx";

function App() {
  return (
    <div className="App relative font-sans">
      <LangProvider>
        <Header />
        <Banner bannerIMG={imgForBanner}/>
        <main>

          <Home />
        </main>
        <Footer />
      </LangProvider>
    </div>
  );
}

export default App;
