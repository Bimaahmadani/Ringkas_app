import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Material from './components/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Subbio11 from './pages/Biologi/Bab 1/subbio11';
import Subbio12 from './pages/Biologi/Bab 1/subbio12';
import Subbio13 from './pages/Biologi/Bab 1/subbio13';
import BioSummary11 from './pages/Biologi/rangkuman/rsubbio11';
import BioSummary12 from './pages/Biologi/rangkuman/rsubbio12';
import NoteRead from './components/Notes/Note-read.jsx';
import NoteCreate from './components/Notes/Note-create';
import NoteUpdate from './components/Notes/Note-edit';
import ScienceProgam from './pages/Progam/ScienceProgam';
import SocialProgam from './pages/Progam/SocialProgam';
import LiteratureProgam from './pages/Progam/LiteratureProgam';

import Courses from "./components/courses"
import About from "./components/about"
import NoteDetail from './components/Notes/Note-edit';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "material",
    element: <Material/>,
  },
  {
    path: "subbio11",
    element: <Subbio11/>,
  },
  {
    path: "subbio12",
    element: <Subbio12/>,
  },
  {
    path: "subbio13",
    element: <Subbio13/>,
  },
  {
    path: "biosummary11",
    element: <BioSummary11/>,
  },
  {
    path: "biosummary12",
    element: <BioSummary12/>,
  },
  {
    path: "noteread",
    element: <NoteRead/>,
  },
  {
    path: "notecreate",
    element: <NoteCreate/>,
  },
  {
    path: "noteupdate",
    element: <NoteUpdate/>,
  },
  {
    path: "science",
    element: <ScienceProgam/>,
  },
  {
    path: "ips",
    element: <SocialProgam/>,
  },
  {
    path: "bahasa",
    element: <LiteratureProgam/>,
  },
  {
    path: "pelajaran",
    element: <Courses/>,
  },
  {
    path: "tentang",
    element: <About/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
