import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'

import {Toaster} from 'react-hot-toast'

import Dashboard from './pages/Home/Dashboard'
import EditResume from './pages/ResumeUpdate/EditResume'

const App = () => {
  return (
    <>
    <div>
       <Router>
            <Routes>
               {/** Default Route page */}
               <Route path='/' element={<LandingPage />} />

                {/** Current page */}
               
               <Route path='/dashboard' element={<Dashboard />} />
               <Route path='/resume/:resumeId' element={<EditResume />} />
            </Routes>
       </Router>
    </div>

    <Toaster 
      toastOptions={{
        className: "",
        style: {
          fontSize: "13px",
        }
      }}
    />
    </>
  )
}

export default App
