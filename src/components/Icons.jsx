import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";

const Icons = () => {
  return (
    <div className="flex text-gray-300 my-3 px-0 gap-6">
      <div className="flex gap-2">
        <img src={github} alt="" className="h-6"/>
        <a href="https://github.com/carlos-escamilla33?tab=repositories" className="hover:text-white transition-colors duration-200">
          Github
        </a>
      </div>
      <div className="flex gap-2">
        <img src={linkedIn} alt="" className="h-6"/>
        <a href="https://www.linkedin.com/in/carlos-al-escamilla/" className="hover:text-blue-400 transition-colors duration-200">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Icons;
