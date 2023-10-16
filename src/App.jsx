import TaskList from "./components/TaskList";
import Header from "./components/Header";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Main } from "./components/Main";

function AppRouter() {
  return (
    <>
    <Header></Header>
    <Main></Main>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  )
}


function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );

  
}

export default App;