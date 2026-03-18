import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../layout/Dashboard/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard"
import Produtos from "../pages/Produtos/Produtos"
import Clientes from "../pages/Clientes/Clientes"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="produtos" element={<Produtos />} />
                    <Route path="clientes" element={<Clientes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes