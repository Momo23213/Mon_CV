import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import Compentence from './pages/Compentence';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import Portfolio from './pages/Portfolio';
import "./styles/style.css"
const route=createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"competence",
    element: <Compentence/>
  },
  {
    path:"Portfolio",
    element: <Portfolio/>
  },
  {
    path:"contact",
    element: <Contact/>
  },
  {
    path:"*",
    element: <Notfound/>
  },
])
function App() {
  return (
    <>
        <RouterProvider router={route} />
    </>
  )
}

export default App
