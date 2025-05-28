import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 

import { Home } from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import { Toaster } from './components/ui/Toaster.jsx'

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

//the working order of this Project is as follows:
//1.Home.jsx
  //a.themetoggle.jsx button
  //b.utils.jsx for combining classNames
//2.NotFound.jsx