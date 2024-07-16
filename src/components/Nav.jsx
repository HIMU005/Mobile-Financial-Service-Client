import arrow from '../assets/Arrow 1.svg'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'
const Nav = ({ label }) => {
    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };
    return (
        <div className="flex justify-between gap-3">
            <button onClick={handleGoBack}><img src={arrow} alt="" /></button>
            <h2>{label}</h2>
            <div></div>
        </div>
    );
};

export default Nav;
Nav.propTypes = {
    label: PropTypes.string,
}