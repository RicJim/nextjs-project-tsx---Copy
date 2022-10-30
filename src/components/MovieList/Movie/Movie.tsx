import Link from "next/link";
import React, { FC } from "react";
import { IMovie } from "../MovieList";
import Image from 'next/image';

interface TProps {
  movie: IMovie;
}

const Movie: FC<TProps> = ({ movie }) => {
  return (
    <li>
      <div className="grow flex flex-col justify-center items-center">
      <Link href={`/movies/${movie.id}`}>
        <Image
          className="cursor-pointer"
          src={movie.Poster}
          alt={`${movie.Title} Poster`}
          width={500}
          height={700}
        />
      </Link>
        <div className="underline">
          <strong className="text-lg">{movie.Title}</strong>
        </div>
      </div>
    </li>
  );
};

export default Movie;
