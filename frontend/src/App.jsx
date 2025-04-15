
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/Landing'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} ></Route>
          <Route path='/signup' element={ <Signup />}></Route>
          <Route path='/signin' element={ <Signin />}></Route>
          <Route path='/dashboard' element={ <Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App