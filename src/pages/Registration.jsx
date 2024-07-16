import Nav from "../components/Nav";
import logoColor from '../assets/Logo color.svg'
import RegisterForm from "../components/FormResigter/RegisterForm";
const Registration = () => {
    return (
        <div>
            <Nav label='Registration' />
            <img className="mx-auto" src={logoColor} alt="" />
            <RegisterForm />
        </div>
    );
};

export default Registration;