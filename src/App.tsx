import { Route, Routes } from "react-router-dom";
import Characters from "./pages/characters/characters";
import Character from "./pages/characters/character";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Characters} />
      <Route path="/characters/:id" Component={Character} />
    </Routes>
  );
};

export default App;
