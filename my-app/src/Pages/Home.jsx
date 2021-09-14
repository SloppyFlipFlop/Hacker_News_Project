import React, { useState, useEffect } from 'react'

import SearchForm from "../Components/SearchForm"
import Articles from '../Components/Articles'

const Home = () => {
  return (
    <div className="app-container">
      <SearchForm/>
      <Articles/>
    </div>
  )
}

export default Home
