import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing'
import Movie from './components/Movie'
import Submitted from './components/Submitted'

const App = () => {
  return (
    <Router  basename="/Movie-date">
      <Routes>
        <Route path='/' element= {<Landing/>} />
        <Route path='/Movie' element= {<Movie/>} />
        <Route path='/Submitted' element= {<Submitted/>} />
      </Routes>
    </Router>
  )
}

export default App;