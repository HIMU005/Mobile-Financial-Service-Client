// import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import AdminDashboard from "./Admin/AdminDashboard";
import AgentDashboard from "./Agent/AgentDashboard";
import UserDashboard from "./User/UserDashboard";

const Dashboard = () => {

    const [role, isLoading] = useRole(); if (isLoading) return <h2>Loading...</h2>

    return (
        <div>
            {role.role === 'admin' && <AdminDashboard />}
            {role.role === 'user' && <UserDashboard />}
            {role.role === 'agent' && <AgentDashboard />}
        </div>
    );
};

export default Dashboard;