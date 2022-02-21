import React from "react";
import "./style.css";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { usePokemonContextValues } from "../../hooks";

export const PokeCard = () => {
  const {
    state: { pokemonData },
    dispatch,
    ACTIONS,
    state,
  } = usePokemonContextValues();

  const onClick = async (e) => {
    return await dispatch({ type: ACTIONS.GET_DATA_API });
  };

  console.log(state);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Paper
        sx={{
          height: 350,
          width: 250,
          border: "10px solid  black",
          borderRadius: 2,
        }}
      >
        <Card className="pokemonCard">
          <div className="cardSpacing">
            <Typography variant="h4" align="center">
              {pokemonData.name}
            </Typography>
            <Typography variant="subtitle2" align="center">
              {pokemonData.type}
            </Typography>
          </div>
          <div className="cardSpacing">
            <img
              src={pokemonData.img}
              alt="pokemon img"
              className="pokemonIg"
            />
          </div>
          <div className="cardSpacing">
            <Typography variant="h5" align="center">
              #{pokemonData.id}
            </Typography>
          </div>
        </Card>
      </Paper>
      <Box sx={{ mt: "45px" }}>
        <Button variant="contained" fullWidth onClick={onClick}>
          Randomize
        </Button>
      </Box>
    </Box>
  );
};
