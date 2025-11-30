// {/* <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
//   {/* Image */}
//   <img
//     src="your-image.jpg"
//     alt="Project"
//     className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
//   />

//   {/* Overlay - hidden by default, shows on hover */}
//   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
//     <div className="text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
//       <h3 className="text-2xl font-bold mb-2">Project Title</h3>
//       <p className="text-sm mb-4">Brief description of your research or project</p>
//       <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
//         View Details
//       </button>
//     </div>
//   </div>
// </div> */}
const Project = ({ title, description, source }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
      <img
        src={source}
        alt=""
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="inset-0 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 items-center justify-center">
        <div className="text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
