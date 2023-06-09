import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginBar from './component/loginbar/LoginBar'
import { LoginContext, LoginInfoContext } from './component/LoginContext/DataContext'
import { Login } from './component/Login/Login'
import { Patient_Self } from './component/Patient_Self.js/Patient_Self'
import { Patient } from './component/Patients/Patient'
import { Patient_Detail_Docter_Side } from './component/Detail_Docter/Patient_Detail_Docter_Side'
import App from './App'
import { Docter } from './component/Doctor/Docter'

export default function Router() {
    const LoginContext = useContext(LoginInfoContext)
  return (
    <Routes>
        <Route path="/"
          element={
            <LoginBar/>
          } />

        <Route
          path="/registers/docter"
          element={
            <LoginContext>
            <Login name={"Docter"} />
            </LoginContext>
          } />

        <Route
          path="/registers/patient"
          element={
            <LoginContext>
            <Login name={"Patient"} />
            </LoginContext>
          } />

        <Route
          path="/registers/pharmasist"
          element={
          <LoginContext>
          <Login name={"Pharmasist"} />
          </LoginContext>
          } />

        <Route
          path="/login/Docter"
          element={
            <LoginContext>
              <Docter />
              </LoginContext>
          } />

        <Route
          path="/login/Patient"
          element={
            <LoginContext>
            <Patient_Self />
            </LoginContext>
          } />

        <Route
          path="/login/Pharmasist"
          element={<Patient />
          } />

        <Route path={`/login/Docter/patient/:id`} element={<Patient_Detail_Docter_Side />} />

      </Routes>
  )
}
