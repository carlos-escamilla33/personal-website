import {Project} from "./index";
import mastermindImg from "../assets/mastermind.png";
import fridgemateImg from "../assets/fridgemateImg.png";
import dAlgorithmImg from "../assets/D*algorithm.jpg";
import mobHomePageImg from "../assets/mobHomePage.png";

const projectNames = [
    {
        id: 0,
        title: "MasterMind",
        description: "Web App Game based on a popular code breaking board game",
        source: mastermindImg,
        link:"https://mastermindproject.netlify.app/",
        techStack: ["React.js", "Material-UI", "Axios"]
    },
    {
        id: 1,
        title: "Fridge-Mate (In Progress)",
        description: "FullStack Food Expiration Mobile App",
        source: fridgemateImg,
        link: "https://github.com/carlos-escamilla33/fridge-mate-server",
        techStack: ["React Native", "Node.js", "Express", "PostgreSQL", "JWT", "Bcrypt"]
    },
    {
        id: 2,
        title: "Analysis of ML Based Robotic Anomany Detection",
        description: "Analyzed a robotic anomaly detection paper and proposed a performance improvement",
        source: dAlgorithmImg,
        link: "https://github.com/carlos-escamilla33/machine_learning_project",
        techStack: ["Python", "Autoencoder", "D* Algorithm", "Logistic Regression", "SVM"]
    },
    {
        id: 3,
        title: "MobMentality",
        description: "Responsive website for local San Jose, CA band with integrated music streaming and fan engagement",
        source: mobHomePageImg,
        link: "https://github.com/carlos-escamilla33/MobMentality",
        techStack: ["React.js", "Tailwind", "EmailJS", "Netlify"]
    }
]

const ProjectsList = () => {

    return (
        <div className="flex flex-col justify-center items-center pt-2 pb-10">
            <div className="text-3xl text-gray-300">
                <h3>Projects</h3>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 pt-10">
                {
                    projectNames.map((project, index) => {
                        return <Project key={index} title={project.title}
                         description={project.description} source={project.source}
                          link={project.link} techStack={project.techStack}/>
                    }
                )}
            </div>
        </div>
    )

}
export default ProjectsList;