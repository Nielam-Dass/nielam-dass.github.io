import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/projects" element={<h1>Projects Page</h1>}/>
      <Route path="/skills" element={<h1>Skills Page</h1>}/>
      <Route path="/contact" element={<h1>Contact Page</h1>}/>
    </Routes>
    </>
  );
}

export default App;
