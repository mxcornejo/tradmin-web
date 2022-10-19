import { Routes, Route } from "react-router-dom"
import { CalculadoraboletahonorariosPage, HomePage } from "../tradmin"

export const AppRouter = () => {
  return (
    <>
        <Routes>

          <Route path="home" element={<HomePage />} />
          <Route path="calculadora" element={<CalculadoraboletahonorariosPage />} />
          <Route path="/*" element={<HomePage />} />

        </Routes>
    </>
  )
}