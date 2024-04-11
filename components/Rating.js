import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';




const Rating = ({ value, totalStars = 5, className }) => {
    const stars = [];

    for(let i = 1; i <= totalStars; i++) {
        if (i <= Math.floor(value)) {
            stars.push(<FaStar className="text-yellow-400" key={i} />);
        } else if (i === Math.floor(value) + 1 && value % 1 !== 0) {
            stars.push(<FaStarHalfAlt className="text-yellow-400" key={i} />);
        } else {
            stars.push(<FaRegStar className="text-yellow-400" key={i} />);
        }
    }

    return (
        <div className={`flex ${className}`}>
            {stars}
        </div>
    );
};

export default Rating;