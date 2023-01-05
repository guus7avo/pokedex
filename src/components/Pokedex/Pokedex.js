import React from "react";
import Pagination from "../Pagination/Pagination";
import Pokemon from "../Pokemon/Pokemon";
import { Container, Info, Div } from "./PokedexStyles";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <Container>
        <h1>Pokedex</h1>

        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </Container>

      {loading ? (
        <Div>
          <h1>Loading pokemons...</h1>
        </Div>
      ) : (
        <Info>
          {pokemons.map((pokemon, index) => {
            return <Pokemon pokemon={pokemon} key={index} />;
          })}
        </Info>
      )}
    </div>
  );
};

export default Pokedex;
