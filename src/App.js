import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Prices from "./pages/Prices.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Banner from "./components/Banner.tsx";
import LangSetting from "./components/LangSetting.tsx";
import imgForBanner from "./assets/banner/dark-plant-background-free-photo.webp";
import { LangProvider } from "./context/LangContext.tsx";
import "./App.css"

function App() {
  return (
    <div className={`App relative font-sans ${'' /* bg-emerald-50 */}`}>
      <LangProvider>
        <LangSetting />
        <Router>
          <Header />
          <Banner bannerIMG={imgForBanner} />
          <main>
            <Routes>
              <Route path="/template_therapist_1" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/about" element={<About/>}/>
            </Routes>
          </main>
          <Footer />
        </Router>
      </LangProvider>
    </div>
  );
}

export default App;
