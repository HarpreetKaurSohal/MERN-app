import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import LandingPage from "./screens/LandingPage/LandingPage";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import ProfilePage from "./screens/ProfilePage/ProfilePage";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/mynotes" element={<MyNotes search={search} />} />
          <Route exact path="/createnote" element={<CreateNote />} />
          <Route exact path="/note/:id" element={<SingleNote />} />
          <Route exact path='/profile' element={<ProfilePage/>} /> 
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
