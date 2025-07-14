import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import UserList from './pages/UserList'

function App() {
  const authToken = localStorage.getItem('authToken')

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            authToken ? <UserList /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </>
  )
}

export default App
