import React from "react";
import Search from "./components/Search";

import { Route, Routes } from "react-router-dom";

function App() {

  return (

     <>
       <Routes>
         <Route path="/" element={<Search />} />
       </Routes>
     </>
  )
}

export default App;