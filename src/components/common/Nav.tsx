import Link from "next/link";
import React, { FC, useContext } from "react";
import { UserContextProps, userContext } from "../context/UserContext";

export const Nav: FC = () => {
  const { userName, setUsername, userDetail } = useContext<UserContextProps>(userContext);
  return (
    <nav className="w-full flex gap-5 p-6 items-center text-2xl text-black">
      <Link legacyBehavior href="/"> Home </Link>
      {/* -- 5px -- */}
      <Link href="/movies"> Movies </Link>
      <div className="flex grow justify-end text-xs">
        {userName && <span>El usuario es {userName}</span>}
        <br/>{!userName && <span> No hay sesión </span>}
        <span>{ userDetail.status.enabled }</span>
        <span>{ userDetail.email }</span>
        <button className="border shaw " onClick={
          ()=> {setUsername('ricardo.jimenez3')}}>log in
          </button>
      </div>
    </nav>
  );
};
