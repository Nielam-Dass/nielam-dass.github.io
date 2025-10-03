import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import SkillsPage from "./pages/skills/SkillsPage";
import ContactPage from "./pages/contact/ContactPage";
import NavigationBar from "./components/NavigationBar";

import "./styles.css";
import type { JSX } from "react";


function App(): JSX.Element {
  return (
    <>
    {
      import.meta.env.VITE_UNDER_CONSTRUCTION_FLAG=="true" &&
      <div className="text-[1.8rem] bg-red-300 text-red-800 border-2 border-red-800 p-[10px]">
        Site is under construction! Some features may not work as intended.
      </div>
    }
    <NavigationBar/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/skills" element={<SkillsPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    </>
  );
}

export default App;
