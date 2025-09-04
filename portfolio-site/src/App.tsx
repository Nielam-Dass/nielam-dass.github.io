import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import SkillsPage from "./pages/skills/SkillsPage";
import ContactPage from "./pages/contact/ContactPage";
import NavigationBar from "./components/NavigationBar";

import "./styles.css";


function App() {
  return (
    <>
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
