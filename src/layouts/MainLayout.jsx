import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

const MainLayout = () => {
    return (
        <div className="layout">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <main className="page-content">
                    <Outlet />
                </main>

            </div>

        </div>
    );
};

export default MainLayout;