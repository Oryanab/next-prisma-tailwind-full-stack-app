import type { NextPage } from "next";
import Head from "next/head";
import { getOptionsForVote } from "../utils/getRandomPokemon";
import { trpc } from "../utils/trpc";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [ids, setIds] = useState(() => getOptionsForVote());
  const [first, second] = ids;
  const firstPokemon = trpc.useQuery(["get-pokemon-by-id", { id: first! }]);
  const secondPokemon = trpc.useQuery(["get-pokemon-by-id", { id: second! }]);
  if (firstPokemon.isLoading || secondPokemon.isLoading) return null;

  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-2xl text-center">first</div>
        <div className="p-2"></div>
        <div className="border rounded p-5 flex justify-between items-center max-w-4xl pb-10">
          <div className="w-64 h-64 flex flex-col ">
            <img
              className="w-64 h-64"
              src={firstPokemon.data?.sprites.front_default!}
              alt=""
            />
            <div className="text-center capitalize mt-[-1rem]">
              {firstPokemon.data?.name!}
            </div>
          </div>
          <div className="p-20">Vs</div>
          <div className="w-64 h-64 flex flex-col">
            <img
              className="w-64 h-64"
              src={secondPokemon.data?.sprites.front_default!}
              alt=""
            />
            <div className="text-center capitalize mt-[-1rem]">
              {secondPokemon.data?.name!}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
