import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";
import NavigationBar from "./NavigationBar";

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
