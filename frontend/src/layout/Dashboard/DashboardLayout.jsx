import { Outlet } from "react-router-dom";
import './DashboardLayout.css'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function DashboardLayout() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Navbar />
                <div style={{ flex: 1 }}>
                    <Outlet />
                </div>

            </div>

        </div>
    );
}

export default DashboardLayout;