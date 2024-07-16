import { useNavigate } from 'react-router-dom';
import arrow from '../assets/Arrow 1.svg'
import PropTypes from 'prop-types';
const Nav = ({ label }) => {
    const navigate = useNavigate();
    const handlePrevious = () => {
        navigate(-1);
    }
    return (
        <div className="flex justify-between items-center gap-3 bg-[#EC1C24] h-20">
            <button onClick={handlePrevious}><img src={arrow} alt="" /></button>
            <h2 className=' text-lg font-semibold text-white'>{label}</h2>
            <div></div>
        </div>
    );
};

export default Nav;
Nav.propTypes = {
    label: PropTypes.string,
}