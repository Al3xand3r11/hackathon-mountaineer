import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from "./components/HeroSection"
import Loading from "./components/Loading"
import NavBar from "./components/NavBar"
import Questions from "./components/Questions"
import Suggestion from "./components/Suggestion"

function App() {

  return (
    <>
      <BrowserRouter>

      <NavBar/>
        <Routes>
          <Route exact path="/" element={<HeroSection/>}  />
          <Route path="/questions" element={<Questions/>}  />
          <Route exact path="/loading" element={<Loading/>}  />
          <Route exact path="/suggestion" element={<Suggestion/>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
