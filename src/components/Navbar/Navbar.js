import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoriteContext";
import { NavLink } from "react-router-dom";

import { Nav, Logo, NavMenu } from "./NavbarStyles";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <Nav>
      <NavLink exact="true" to="/home">
        <Logo>
          <img src={logoImg} alt="PokeApi-logo" />
        </Logo>
      </NavLink>
      <NavMenu>
        <NavLink exact="true" to="/home" className="hidden">
          <img src="/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </NavLink>
        <NavLink exact="true" to="/favorite" className="favorite">
          <div>
            <span>❤️{favoritePokemons.length} FAVORITE</span>
          </div>
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
