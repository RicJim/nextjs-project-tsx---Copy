import React, { NextPage, PageConfig } from "next";
import { ApplicationWrapper } from "../components/layout/ApplicationWrapper";

type HomeProps = {
  response: string;
};

const Home: NextPage<HomeProps> = () => {
  return (
    <ApplicationWrapper
      title="Home"
      description="Home of the rootlab movies website"
    >
      <div className="grow flex flex-col justify-center items-center bg-[url('/images/home-bg.jpg')]">
        <div className="grow bg-black w-full justify-center items-center flex opacity-70">
          <h1 className="text-8xl font-bold text-white">
            Bienvenidos a Rootlab Movies
          </h1>
        </div>
      </div>
      <div className="font-bold">
        <span>Nombre: Ricardo Jose Jimenez Espinosa / Correo: ricardo.jimenez3@utp.ac.pa</span>
      </div>
    </ApplicationWrapper>
  );
};

export default Home;
