import React from 'react';
//import { Button } from './components/ui/button';
import Navbar from './components/components_lite/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './components/authentication/Register';
import { Home, LogIn } from 'lucide-react';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },
  {
    path: "/login",
    element:<LogIn />
  },
  {
    path: "/register",
    element:<Register />
  },
]); 

function App(){
  return(
    <div>
      <RouterProvider router= {appRouter}></RouterProvider>
    </div>
  )
}

export default App