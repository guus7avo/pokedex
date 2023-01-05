import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoriteContext";
import "../Pokemon.css";
import { Link } from "react-router-dom";
import {
  Card,
  Img,
  Body,
  Top,
  Bottom,
  Type,
  Text,
  Favorite,
  Button,
} from "./PokemonStyles";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const redHeart = "💖";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  return (
    <>
      {pokemon.id < 650 ? (
        <Link to={`/detail/` + pokemon.id} props={pokemon}>
          <Card className={pokemon.types[0].type.name}>
            <Img>
              <img
                src={`../images/animated/${pokemon.id}.gif`}
                alt="Pokemon-gif"
              />
            </Img>
            <Body>
              <Top>
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
              </Top>

              <Bottom>
                <Type>
                  {pokemon.types.map((type, idx) => {
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
                <button onClick={onHeartClick}>
                  <Favorite>{heart}</Favorite>
                </button>
              </Bottom>
            </Body>
          </Card>
        </Link>
      ) : (
        <Link to={`/detail/` + pokemon.id} props={pokemon}>
          <Card className={pokemon.types[0].type.name}>
            <Img>
              <img
                src={`../images/animated/${pokemon.id}.png`}
                alt="Pokemon-img"
              />
            </Img>
            <Body>
              <Top>
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
              </Top>

              <Bottom>
                <Type>
                  {pokemon.types.map((type, idx) => {
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
                <Button onClick={onHeartClick}>
                  <Favorite>{heart}</Favorite>
                </Button>
              </Bottom>
            </Body>
          </Card>
        </Link>
      )}
    </>
  );
};

export default Pokemon;
