import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Icon = ({ title, img, goingTo }) => {
    console.log(goingTo);
    return (
        <div className="">
            <Link to={goingTo} className="flex justify-center items-center">
                <img className="p-3 w-16 h-16 rounded-2xl bg-gradient-to-r from-[#F24335] to-[#FE8049]" src={img} alt="" />
            </Link>
            <h2 className="text-[#6E6E6E] text-xs font-medium text-center my-1">{title}</h2>
        </div>
    );
};

export default Icon;
Icon.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    goingTo: PropTypes.string,
}