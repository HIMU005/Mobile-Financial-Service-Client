import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../pages/Dashboard/Dashboard";
import SendMoney from "../pages/Dashboard/User/SendMoney";
import CashIn from "../pages/Dashboard/User/CashIn";
import CashOut from "../pages/Dashboard/User/CashOut";
import Balance from "../pages/Dashboard/User/Balance";
import HistoryUser from "../pages/Dashboard/User/HistoryUser";
import DashboardLayOut from "../Layout/DashboardLayOut";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/registration",
        element: <Registration />
    },
    {
        path: '/dashboard',
        element: <DashboardLayOut />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            // user routes
            {
                path: 'sendMoney',
                element: <SendMoney />
            },
            {
                path: 'cashIn',
                element: <CashIn />,
            },
            {
                path: 'cashOut',
                element: <CashOut />
            },
            {
                path: 'balance',
                element: <Balance />,
            },
            {
                path: 'history',
                element: <HistoryUser />
            }
        ]
    },
    // {
    //     path: '/sendMoney',
    //     element: <SendMoney />
    // },
    // {
    //     path: '/cashIn',
    //     element: <CashIn />,
    // },
    // {
    //     path: '/cashOut',
    //     element: <CashOut />
    // },
    // {
    //     path: '/balance',
    //     element: <Balance />,
    // },
    // {
    //     path: '/history',
    //     element: <HistoryUser />
    // }
]);