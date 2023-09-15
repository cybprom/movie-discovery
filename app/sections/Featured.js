import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Featured() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    try {
      // const apiKey = process.env.DB_API;
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
      );
      const data = await response.json();
      setMovieList(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movie", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  // console.log(movieList);
  const featuredMovies = movieList.slice(0, 10);
  return (
    <>
      {loading ? (
        <h1></h1>
      ) : (
        <section className="flex flex-col container mx-auto pt-24 pl-3 pr-3 md:pr-0 md:pl-6">
          <div className="flex justify-between items-center mb-11">
            <div>
              <h2 className="text-xl md:text-4xl text-black font-bold">
                Featured Movie
              </h2>
            </div>

            <div className="flex items-center text-[#BE123C] md:text-lg font-normal">
              See more
              <span className="ml-3">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
                    stroke="#B91C1C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="grid gap-14 grid-cols-1 md:grid-cols-4 px-3 pb-10">
            {featuredMovies.slice(0, 10).map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
