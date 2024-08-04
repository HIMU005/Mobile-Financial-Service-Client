import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";

const DashboardLayOut = () => {
    const location = useLocation();
    const segments = location.pathname.split('/');
    const route = segments[segments.length - 1];
    return (
        <div>
            <Nav label={route} />
            <Outlet />
        </div>
    );
};

export default DashboardLayOut;
