import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between contaier mxauto p-5 md:px-24 absolute top-0left-0 z-20 text-white w-full">
      <a href="/">
        <img src="./movieBox.svg" />
      </a>
      {/* <h1>Search</h1> */}
      <form className="relative w-[50%] hidden md:flex items-center">
        <input
          type="search"
          name="query"
          className="block bg-transparent p-3 w-[100%] border-solid border-2 border-white rounded-md outline-none placeholder:text-white"
          placeholder="What do you want to watch?"
        />
        <span className="absolute right-4 pr-1">
          <svg
            className=""
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </form>
      <div className="flex items-center space-x-5">
        <h2>Sign in</h2>
        <img src="/menu.svg" />
      </div>
    </header>
  );
}
