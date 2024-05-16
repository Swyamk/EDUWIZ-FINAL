import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './sections/Home'
import About from './sections/About'
import Login from './sections/Login'
import Contact from './sections/Contact'
import Signup from './sections/Signup'
import Courses from './sections/Courses'
import Header from './sections/Header'
import Footer from './sections/Footer'
import WebRTC from './sections/WebRTC'
import PeerChat from './sections/WebRtc2'
import Resource from './sections/Resources'
import Quiz from './sections/Quiz'
import { useEffect } from 'react'

import { course } from './Components/data'
import ParticulerCourse from './Components/ParticulerCourse'
import VideoPage from './Components/VideoPage'



function App() {





  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/WebRTC' element={<WebRTC />} />
        <Route path='/WebRTC/peerchat' element={<PeerChat />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/resource' element={<Resource/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/login/signup' element={<Signup/>} />
        <Route path='/courses' element={<Courses/>} />
        {
          course.map((item, index) => {
            return (
              <Route key={index} path={`/course/${item.id}`} element={<ParticulerCourse item={item} />} />
            )
          })
        }
        {
          course.map((item, index) => {
            return (
              <Route key={index} path={`/video/${item.id}`} element={<VideoPage item={item} />} />
            )
          })
        }
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
