import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FavoriteProvider } from "./contexts/favoriteContext";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";

const favoritesKey = "f";
function App() {
  const [favorites, setFavorites] = useState([]);

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/" element={<Home />} exact />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<PokemonDetail />} />
          </Routes>
        </Router>
      </div>
    </FavoriteProvider>
  );
}

export default App;
