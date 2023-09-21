import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp'
import LandingPage from '../src/before/LandingPage';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  index  element={<LandingPage/>} />
        <Route exact path="/login"   element={<Login/>} />
        <Route exact path="/Sign-up"   element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
