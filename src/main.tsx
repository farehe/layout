import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'swiper/css';
import App from './App.tsx'
// Import Swiper styles
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IconContext } from 'react-icons'
// import './index.css'
// Create a client
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <IconContext.Provider
        value={{
          size: "1.5em",
        }}
      >
        <App />
      </IconContext.Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
