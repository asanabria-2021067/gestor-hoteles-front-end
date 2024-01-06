import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './AppRouter'
import './style.css'

import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/system'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <NextUIProvider>
    <AppRouter />
    </NextUIProvider>
  </BrowserRouter>,
)
