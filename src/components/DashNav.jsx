import useRole from '../hooks/useRole';
import navLogo from './Nav Logo.svg'
const DashNav = () => {
    const user = useRole();
    return (
        <div className="flex flex-col gap-2 items-center justify-center bg-[#EC1C24] h-40">
            <img className='w-32 mx-auto ' src={navLogo} alt="" />
            <h2 className='text-center text-white font-semibold text-xl'>{user[0]?.email}</h2>
        </div>
    );
};
export default DashNav;
