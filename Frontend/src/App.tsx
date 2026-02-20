import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JobApplication from './views/JobApplication/JobApplication'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<JobApplication />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
