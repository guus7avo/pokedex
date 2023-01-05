import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoriteContext";
import { NavLink } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import "../Pokemon.css";
import {
  B1,
  H1,
  H2,
  Bottom,
  Top,
  Img,
  Id,
  Text,
  Name,
  First,
  Second,
  Type,
  Container,
  Favorite,
  Button,
} from "./PokemonDetailedStyles";

function PokemonDetailed(props) {
  const { pokemons } = props;

  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemons.name)
    ? redHeart
    : blackHeart;
  const onHeartClick = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemons.name);
  };
  console.log(pokemons);
  return (
    <div>
      <Container className={pokemons.types && pokemons.types[0].type.name}>
        <Top>
          <First>
            <NavLink exact to="/home">
              {" ⬅ "}
            </NavLink>
            <div>
              {" "}
              <Button onClick={onHeartClick}>
                <Favorite>{heart}</Favorite>
              </Button>
            </div>
          </First>
          <Second>
            <Name>
              <H1>{pokemons.name}</H1>
              <Type>
                {pokemons.types &&
                  pokemons.types.map((type, idx) => {
                    return (
                      <Text
                        key={idx}
                        className={type.type.name}
                        id={type.type.name}
                      >
                        {type.type.name}
                      </Text>
                    );
                  })}
              </Type>
            </Name>
            <Id>#{pokemons.id}</Id>
          </Second>

          <Img src={`../images/pokedex/${pokemons.id}.png`} />
        </Top>
        <Bottom>
          <B1>
            <H2>Status</H2>
          </B1>

          {pokemons.stats &&
            pokemons.stats.map((stat, idx) => {
              return (
                <ProgressBar
                  key={idx}
                  title={stat.stat.name}
                  width={stat.base_stat}
                  text={stat.base_stat}
                />
              );
            })}
        </Bottom>
      </Container>
    </div>
  );
}

export default PokemonDetailed;
