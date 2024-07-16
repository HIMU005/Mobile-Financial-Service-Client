import { Link } from 'react-router-dom';
import logoWhite from '../assets/Logo while.svg'
const Home = () => {
    return (
        <div className="bg-orange-600 h-full ">
            <img className='mx-auto' src={logoWhite} alt="" />
            <div className='flex justify-center gap-5 my-6'>
                <Link className='btn btn-outline btn-warning bg-white' to={'/login'}>Login</Link>
                <Link className='btn btn-outline btn-warning bg-white' to={'/registration'}>Registration</Link>
            </div>
        </div>
    );
};

export default Home;