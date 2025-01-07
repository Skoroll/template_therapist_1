import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Banner from "./components/Banner.tsx";
import imgForBanner from "./assets/banner/dark-plant-background-free-photo.webp";
import { LangProvider } from "./context/LangContext.tsx";

function App() {
  return (
    <div className="App relative font-sans">
      <LangProvider>
        <Router>
          <Header />
          <Banner bannerIMG={imgForBanner} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </LangProvider>
    </div>
  );
}

export default App;
