import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { brandLightBg } from './_utils/colors.ts'
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from './_components/_layout/index.tsx'
import ScrollToTop from './_components/_layout/ScrollTop.tsx'
import TeamPage from './_pages/TeamPage.tsx'
import QuestsPage from './_pages/QuestsPage.tsx'

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "quests", element: <QuestsPage /> },
      { path: "team", element: <TeamPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <main
        className={`min-h-[100vh] ${brandLightBg} flex flex-col items-center`}
      >
        {" "}
       
         {/* @ts-expect-error types wrong with router */}
        <RouterProvider router={router}>
        {/* <Nav /> */}
          <ScrollToTop />
          {router}
        </RouterProvider>
    {/* <App /> */}
    </main>
  </React.StrictMode>,
)
