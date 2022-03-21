import React, { Dispatch, SetStateAction } from "react";

const MAX_DEX_ID = 493;

export const getRandomPokemon = (notThisOne?: number) => {
  const pokemonNumber = Math.floor(Math.random() * MAX_DEX_ID) + 1;
  if (pokemonNumber !== notThisOne) return pokemonNumber;
  else getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
  const firstId = getRandomPokemon();
  const secondId = getRandomPokemon(firstId);

  return [firstId, secondId];
};
