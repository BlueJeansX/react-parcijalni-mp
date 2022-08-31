import React, { useState } from "react";
import axios from "axios";

import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Details from "./Details";
import DetailsList from "./DetailsList";



function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [podaci, setPodaci] = useState("");
  const [repozitoriji, setRepozitoriji] = useState([]);


  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${searchInput}`).then((res) => {
      // console.log(res.data)
      setPodaci(res.data);
     // setSearchInput("");
    })
  };


  const handleSearchRepos =  (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${searchInput}/repos`).then((res) => {
       console.log(res.data)
       setRepozitoriji(res.data);
     
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
              <Details podaci={podaci} />
              <button onClick={handleSearchRepos} className="inline-block mt-2 bg-pink-500 hover:bg-pink-400 focus:bg-pink-700 px-6 py-2 rounded text-white shadow-lg">
                DOHVATI REPOS
              </button>
              <DetailsList podaci={podaci}/>
              
            </div>
            <Footer />

          </div>
        </form>
      </main>

    </>
  );
}

export default Search;
