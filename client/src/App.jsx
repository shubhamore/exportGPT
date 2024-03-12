import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import { Navigate, Route, Routes } from "react-router-dom"
import './App.css'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import ExportPage from './pages/ExportPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/export" element={<ExportPage conversation={conversation}/>} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
