import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import yumrun from "../assets/YumRun.png";
import PropTypes from "prop-types";
const ProjectCards = ({ name, description }) => {
  return (
    <div className="card card-bordered w-full bg-base-100 md:w-80 shadow-xl my-5 mx-5 hover:scale-105 transition-all duration-300 ease-in">
      <figure className="px-5 pt-10 ">
        <img
          src={yumrun}
          alt="YumRun"
          className="rounded-xl hover:scale-110 transition-all duration-300 ease-in"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-circle">
            <FaGithub />
          </button>
          <button className="btn btn-circle">
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </div>
  );
};
ProjectCards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default ProjectCards;
