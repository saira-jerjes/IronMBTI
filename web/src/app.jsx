import { Route, Routes } from "react-router-dom"
import { HomePage, OtherTestsPage, TeamPage, TestPage } from "./pages"
import { Navbar, PageLayout } from "./components"





function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={
        <PageLayout>
          <HomePage/>

        </PageLayout>
      } />

      <Route path='/personality-test' element={<TestPage />} />
      <Route path='/other-tests' element={<OtherTestsPage />} />
      <Route path='/our-team' element={<TeamPage />} />
    </Routes>
    </>
  )
}

export default App
