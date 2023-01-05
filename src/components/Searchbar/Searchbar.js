import React, { useState } from "react";
import { Container, Div, Input, Button } from "./SearchbarStyled";

const Searchbar = (props) => {
  const [search, setSearch] = useState("Ditto");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <Container>
      <Div>
        <Input placeholder="Buscar pokemon" onChange={onChangeHandler} />
      </Div>
      <div>
        <Button onClick={onButtonClickHandler}>Buscar</Button>
      </div>
    </Container>
  );
};

export default Searchbar;
