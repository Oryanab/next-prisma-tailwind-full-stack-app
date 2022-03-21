import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "oryan" }]);

  if (isLoading) return <div>Loading...</div>;
  if (data) return <div>{data.greeting}</div>;

  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-2xl text-center">first</div>
        <div className="p-2"></div>
        <div className="border rounded p-5 flex justify-between items-center max-w-4xl">
          <div className="w-20 h-20 bg-red-200"></div>
          <div className="p-20">Vs</div>
          <div className="w-20 h-20 bg-red-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
