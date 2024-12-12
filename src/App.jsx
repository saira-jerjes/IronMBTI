import Navbar from "./components/ui/navbar/navbar"
import { Route, Routes } from "react-router-dom"
import { HomePage, OtherTestsPage, TeamPage, TestPage } from "./pages"




function App() {
 

  return (
    <>
   <Navbar/>

   <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/personality-test' element={<TestPage />} />
        <Route path='/other-tests' element={<OtherTestsPage />} />
        <Route path='/our-team' element={<TeamPage />} />
      </Routes>

    </>
  )
}

export default App
