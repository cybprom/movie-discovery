import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Genres from "../components/Card";
import Sidebar from "../components/Sidebar";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);

  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false); // State for toggling the floating menu

  const toggleFloatingMenu = () => {
    setIsFloatingMenuOpen(!isFloatingMenuOpen);
  };

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          // `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
          `https://api.themoviedb.org/3/movie/238?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchMovieGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/genres?api_key=${apiKey}&language=en-US`
          // `https://api.themoviedb.org/3/movie/238/genres?api_key=${apiKey}&language=en-US`
        );
        const genreData = await response.json();
        // console.log("Genre Data:", genreData);
        console.log(genreData.genres);
        // setGenres(genreData);
      } catch (error) {
        console.error("Error fetching movie genres:", error);
      }
    };

    fetchMovieDetails();
    // fetchMovieGenres();
  }, [id]);
  if (!movieDetails) {
    return <span className="loader"></span>;
  }

  return (
    <>
      <section className="moviedetalsection h-full w-full flex gap-8 items-center text-black">
        {/* SIDEBAR */}
        <Sidebar isFloatingMenuOpen={isFloatingMenuOpen} />
        <div className="moviedetailcontainer flex flex-col w-[80%] h-[100%] px-5">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
            className="movieldetailposter w-[1198px] h-[273px] rounded-3xl"
            alt=""
          />
          <div className="moviedetailoverlay flex justify-between">
            <div className="moviedetailinfo flex flex-col py-16 gap-5 text-2xl text-[#404040] font-bold h-full">
              <div className="moviedetailText flex itemscenter gap-3">
                <p data-testid="movie-title" className="text-black">
                  {movieDetails.title} ●
                </p>
                <p data-testid="movie-release-date" className="text-black">
                  {movieDetails.release_date}
                </p>
                <p data-testid="movie-overview" className="text-black">
                  ● {movieDetails.runtime} mins
                </p>

                {/* <Genres genreIds={movieDetails.genre_ids} /> */}
              </div>

              <div className="detailform flex flex-col gap10 gap-12 h-full">
                <div className="moviedetailOverview w[775px] w-[745px] h-[90px]">
                  <p className="text-xl text-[#333333] font-normal text-left">
                    {movieDetails.overview}
                  </p>
                </div>

                <div className="movieDetailDirectors flex flex-col gap-10 space-y8">
                  <p className=" text-xl font-normal text-left">
                    Director:{" "}
                    <span className="text-[#be123c]"> Joseph Kosiniki</span>
                  </p>
                  <p className=" text-xl font-normal text-left">
                    Writers:{" "}
                    <span className="text-[#be123c]"> Jim cash, Jack epps</span>
                  </p>
                  <p className=" text-xl font-normal text-left">
                    Stars:{" "}
                    <span className="text-[#be123c]">
                      Tom cruise, Jennifer Connely
                    </span>
                  </p>

                  <div className="topRated flex items-center h-[53px] w[785px] w-[760] gap-5 rounded-xl border border-solid border-[#c7c7c7]">
                    <p className="flex items-center justify-center text-white bg-[#be123c] w-[253px] h-[53px] rounded-xl text-xl font-medium">
                      Top rated movie #65
                    </p>
                    <p className=" text-xl font-medium text-[#333333]">
                      Awards 9 nominations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="detailRatingContainer flex flex-col items-end gap-5 py-20">
              <div className="detailRating flex items-center gap-3">
                <img src="/star.svg" alt="star" />
                <p className="movieDetailVote text-xl font-medium text-[#e8e8e8]">
                  {movieDetails.vote_average}
                </p>
                <p className="movieDetailCount text-xl font-medium text-[#666666]">
                  {/* {movieDetails.count} */} | 350k
                </p>
              </div>

              <div className="movieDetailShow flex flex-col gap-4">
                <button className=" cursor-pointer flex justify-center items-center gap-3 w-[350px] h-[55px] text-white text-xl font-medium transition bg-[#be123c] border-none hover:scale-95 rounded-xl">
                  <img src="/TwoTickets.svg" /> See Showtimes
                </button>
                <button className=" cursor-pointer flex justify-center items-center gap-3 w-[350px] h-[55px] text-xl font-medium transition bg-[#be123c1a] border-2 border-solid hover:scale-95 border-[#be123c] rounded-xl">
                  <img src="List.svg" /> More watch options
                </button>
              </div>

              <div className="recommended bg-[url('/img3.svg')] h[229px] h-full w-[350px] flex items-end rounded-xl">
                <div className="recommendedText flex items-center justify-center bg-[#12121280] w-full h-[40px] text-white text-sm">
                  <img src="/List2.svg" alt="" className="mr-2" /> The Best
                  Movies and Shows in September
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
