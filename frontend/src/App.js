import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/mynotes" element={<MyNotes />} />
      </Routes>
    </main>

    <Footer />
  </BrowserRouter>
);

export default App;
