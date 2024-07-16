import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <h2>I am dashboard</h2>
        </div>
    );
};

export default Dashboard;