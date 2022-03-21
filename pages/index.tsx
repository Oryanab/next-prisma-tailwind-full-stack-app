import type { NextPage } from "next";
import Head from "next/head";
import { getOptionsForVote } from "../utils/getRandomPokemon";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "oryan" }]);

  const [first, second] = getOptionsForVote();

  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-2xl text-center">first</div>
        <div className="p-2"></div>
        <div className="border rounded p-5 flex justify-between items-center max-w-4xl">
          <div className="w-20 h-20 bg-red-400">{first}</div>
          <div className="p-20">Vs</div>
          <div className="w-20 h-20 bg-red-400">{second}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
