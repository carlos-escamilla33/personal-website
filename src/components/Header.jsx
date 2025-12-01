import headshot from "../assets/headshot.jpeg";
import Icons from "./Icons";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-2 md:mx-50 md:flex-row max-w-5xl mx-auto px-4">
      <div className="p-[2px] rounded-full bg-gradient-to-tr from-purple-500 to-blue-600">
        <div className="p-1 bg-black rounded-full">
          <img
            src={headshot}
            alt="Carlos Escamilla"
            className="w-40 h-auto rounded-full"
          />
        </div>
      </div>
      <div className="p-4">
        <span className="font-bold cursor-pointer text-3xl hover:text-blue-600 transition-colors duration-200">
          Hey, I'm Carlos.
        </span>
        <span className="text-2xl p-2 text-gray-300">
          I'm a senior Computer Science student @ California State University,
          East Bay
        </span>
        <Icons />
      </div>
    </div>
  );
};

export default Header;
