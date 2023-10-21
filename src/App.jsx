import './App.css'
import Header from "./components/Header"
import Profile from "./components/Profile"
import ProjectsPage from './components/ProjectsPage'
import Footer from "./components/Footer"

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/projetos" element={<ProjectsPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
