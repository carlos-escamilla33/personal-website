import { Navbar } from "./index";
import headshot from "../assets/headshot.jpeg";

const Header = () => {
  return (
    <div>
      <div>
        <img src={headshot} alt="" className="w-30 h-30 rounded-full border-4 border-red-400"/>
      </div>
      <div>
        <p>
          Hey, I'm Carlos. I'm a Senior Computer Science student @ CSU East Bay
          and Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Header;
