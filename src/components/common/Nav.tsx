import Link from "next/link";
import React, { FC } from "react";

export const Nav: FC = () => {
  return (
    <nav className="w-full flex gap-5 p-6 items-center text-2xl text-black">
      <Link legacyBehavior href="/"> Home </Link>
      {/* -- 5px -- */}
      <Link href="/movies"> Movies </Link>
    </nav>
  );
};