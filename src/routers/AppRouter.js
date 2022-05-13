import { Route, Routes } from "react-router-dom"
import { CharacterDetails } from "../pages/CharacterDetails"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/personaje/:characterId" element={<CharacterDetails />} />
        </Routes>
    )
}
