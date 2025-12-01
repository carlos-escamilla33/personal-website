import Skill from "./Skill";

const skills = [
    "JavaScript", 
    "Python",
    "Java", 
    "C++", 
    "HTML5", 
    "Bootstrap", 
    "Material-UI",
    "Tailwind CSS", 
    "ReactJS", 
    "React Native", 
    "Node", 
    "Express", 
    "Jest", 
    "Axios",
    "PostgreSQL",
    "MySQL"
]

const SkillList = () => {
  return (
    <div id="skills" className="flex flex-col justify-center items-center pt-2 pb-10 max-w-4xl mx-auto px-4">
        <div className="text-3xl text-gray-300">
                <h3>Skills</h3>
        </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10">
        {
            skills.map((skill, index) => <Skill key={index} skill={skill}/>)
        }
      </ul>
    </div>
  );
};

export default SkillList;
