import * as React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import RootLayout from '@/components/layouts/RootLayout.jsx'
import CartPage from '@/pages/cart/CartPage.jsx'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/cart' element={<CartPage />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Route>
  )
)
