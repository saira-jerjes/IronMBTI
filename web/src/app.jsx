import { Route, Routes } from "react-router-dom"
import { HomePage, OtherTestsPage, TeamPage, TestPage, ResultPage, PersonalitiesPage } from "./pages"
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
      <Route path='/result' element={<ResultPage />} />
      <Route path="/personalities" element={<PersonalitiesPage />} />

    </Routes>
    </>
  )
}

export default App
