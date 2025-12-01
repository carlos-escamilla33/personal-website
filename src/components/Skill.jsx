const Skill = ({skill}) => {
  return (
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
      <svg
        className="w-6 h-6 text-fg-success shrink-0 me-1.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="grey"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <span className="cursor-pointer text-2xl hover:text-blue-600 transition-colors duration-200">{skill}</span>
    </li>
  );
};

export default Skill;
