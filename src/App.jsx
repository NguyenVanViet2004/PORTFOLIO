import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react"
import "./index.css"
import Home from "./Pages/Home"
import About from "./Pages/About"
import AnimatedBackground from "./components/Background"
import Navbar from "./components/Navbar"
import Portofolio from "./Pages/Portofolio"
import ContactPage from "./Pages/Contact"
import ProjectDetails from "./components/ProjectDetail"
import WelcomeScreen from "./Pages/WelcomeScreen"
import { AnimatePresence } from "framer-motion"

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode='wait'>
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <footer>
            <center>
              <hr className='my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center' />
              <p class='text-center text-sm text-gray-400 mb-4'>
                Portfolio template by 
                <a
                  href='https://github.com/EkiZR'
                  target='_blank'
                  class='text-blue-500 hover:underline'>
                   {" EkiZR "}
                </a>
                , available on GitHub.
              </p>
            </center>
          </footer>
        </>
      )}
    </>
  )
}

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className='my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center' />
        {/* <span className='block text-sm pb-4 text-gray-500 text-center dark:text-gray-400'>
          Portfolio template by
          <a
            href='https://github.com/EkiZR'
            target='_blank'
            class='text-blue-500 hover:underline'>
            EkiZR™
          </a>
          , available on GitHub.
        </span> */}
        <p class='text-center text-sm text-gray-400 mb-4'>
          Portfolio template by
          <a
            href='https://github.com/EkiZR'
            target='_blank'
            class='text-blue-500 hover:underline'>
            {" EkiZR "}
          </a>
          , available on GitHub.
        </p>
      </center>
    </footer>
  </>
)

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path='/project/:id' element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
