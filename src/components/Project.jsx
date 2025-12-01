const Project = ({ title, description, source, link, techStack}) => {
  return (
    <a href={link}>
      <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64">
        <img
          src={source}
          alt={title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-gray-300 p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
          <div className="flex flex-col px-6 pt-4 pb-2">
                {
                    techStack.map((tech, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>)
                }
            </div>
        </div>
      </div>
    </a>
  );
};
export default Project;
