import { createHashRouter, Navigate, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import SkillsPage from "./pages/skills/SkillsPage";
import ContactPage from "./pages/contact/ContactPage";
import NavigationBar from "./components/NavigationBar";
import ReactGA4 from "react-ga4";
import { Helmet } from "react-helmet";

import "./styles.css";
import { type JSX } from "react";


const hashRouter = createHashRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "projects",
        element: <ProjectsPage/>
      },
      {
        path: "skills",
        element: <SkillsPage/>
      },
      {
        path: "contact",
        element: <ContactPage/>
      },
      {
        path: "*",
        element: <Navigate to={"/"}/>
      }
    ]
  }
]);

ReactGA4.set({send_page_view: false});
ReactGA4.initialize(import.meta.env.VITE_GA4_MEASUREMENT_ID);

function AppLayout(): JSX.Element {
  return (
    <>
      <ScrollRestoration/>
      <NavigationBar/>
      <Outlet/>
    </>
  );
}

function App(): JSX.Element {
  return (
    <>
    <Helmet>
      <meta name="author" content={import.meta.env.VITE_AUTHOR_NAME}/>
    </Helmet>
    {
      import.meta.env.VITE_UNDER_CONSTRUCTION_FLAG=="true" &&
      <div className="text-[1.8rem] bg-red-300 text-red-800 border-2 border-red-800 p-[10px]">
        Site is under construction! Some features may not work as intended.
      </div>
    }
    <RouterProvider router={hashRouter}/>
    </>
  );
}

export default App;
