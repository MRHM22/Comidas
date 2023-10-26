import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react'

import { ComidasPage } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <ComidasPage/> } />
    </Routes>
  )
}
