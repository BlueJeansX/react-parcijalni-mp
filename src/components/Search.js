import React, { useState } from "react";
import axios from "axios";

import { Route, Routes } from "react-router-dom";

function Search() {

  const [searchInput, setSearchInput] = useState("");
  const [podaci, setPodaci] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${searchInput}`).then((res) => {
      // console.log(res.data)
      setPodaci(res.data);
    })
  };


  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... w-full sm:w-3/4 max-w-lg p-12 pb-6 shadow-2xl rounded">
              <div className="text-white pb-4 text-3xl font-semibold">
                Pretraži:
              </div>
              <input required
                className="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
                id="username"
                type="text"
                placeholder="unesi pojam pretraživanja"
                value={searchInput}
                onChange={handleChange}

              />

              <button className="inline-block mt-2 bg-pink-500 hover:bg-pink-400 focus:bg-pink-700 px-6 py-2 rounded text-white shadow-lg">
                GO
              </button>

              <div className="pt-5 text-white">
                <img src="{podaci?.avatar_url}" /> 
                <p className="pt-5">LOGIN: {podaci?.login}</p>
                <p className="pt-5">NAME: {podaci?.name}</p>
                <p className="pt-5">BIO: {podaci?.bio}</p>
                <p className="pt-5">LOCATION: {podaci?.location}</p>
              </div>



            </div>
            <p className="mt-4 text-center text-gray-400 text-xs">
              ©2022 Parcijalni ispit
            </p>

          </div>

        </form>
      </main>

    </>
  );
}

export default Search;
