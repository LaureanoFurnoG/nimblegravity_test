import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JobApplication from './views/JobApplication/JobApplication'
import { ConfigProvider, theme } from "antd"

function App() {

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<JobApplication />}></Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  )
}

export default App
