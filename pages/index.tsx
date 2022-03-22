import type { NextPage } from "next";
import Head from "next/head";
import { getOptionsForVote } from "../utils/getRandomPokemon";
import { trpc } from "../utils/trpc";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [ids, updateIds] = useState(() => getOptionsForVote());
  const [first, second] = ids;
  const firstPokemon = trpc.useQuery(["get-pokemon-by-id", { id: first! }]);
  const secondPokemon = trpc.useQuery(["get-pokemon-by-id", { id: second! }]);
  if (firstPokemon.isLoading || secondPokemon.isLoading) return null;

  const voteForRoundest = (selected: number) => {
    if (selected === first) {
      trpc
        .useMutation(["cast-vote"])
        .mutate({ votedFor: first, votedAgainst: second! });
    } else {
      trpc
        .useMutation(["cast-vote"])
        .mutate({ votedFor: second!, votedAgainst: first! });
    }
    updateIds(getOptionsForVote());
  };

  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-2xl text-center">first</div>
        <div className="p-2"></div>
        <div className="border rounded p-5 flex justify-between items-center max-w-4xl pb-10">
          <div className="w-70 h-70 flex flex-col">
            <img
              className="w-64 h-64"
              src={firstPokemon.data?.sprites.front_default!}
              alt=""
            />
            <div className="text-center capitalize mt-[-1rem]">
              {firstPokemon.data?.name!}
            </div>
            <button
              className="rounded-none mt-10 bg-white text-black"
              onClick={() => voteForRoundest(first!)}
            >
              Rounder
            </button>
          </div>

          <div className="p-20">Vs</div>
          <div className="w-70 h-70 flex flex-col">
            <img
              className="w-64 h-64"
              src={secondPokemon.data?.sprites.front_default!}
              alt=""
            />
            <div className="text-center capitalize mt-[-1rem]">
              {secondPokemon.data?.name!}
            </div>

            <button
              className="rounded-none mt-10 bg-white text-black"
              onClick={() => voteForRoundest(second!)}
            >
              Rounder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
