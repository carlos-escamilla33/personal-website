import {Project} from "./index";

const projectNames = [
    {
        id: 0,
        title: "MasterMind",
        description: "Web App Game based on a popular code breaking board game"
    },
    {
        id: 1,
        title: "Fridge-Mate",
        description: "FullStack Food Expiration Mobile App"
    },
    {
        id: 2,
        title: "Analysis of ML Based Robotic Anomany Detection",
        description: "Analyzed a robotic anomaly detection paper and proposed a performance improvement"
    },
    {
        id: 3,
        title: "MobMentality",
        desription: "Responsive website for local San Jose band with integrated music streaming and fan engagement"
    }
]

const ProjectsList = () => {

    return (
        <div className="flex justify-center pt-2">
            <div className="text-3xl">
                <h3>Projects</h3>
            </div>
            <div className="flex min-h-screen items-center justify-center">
                {
                    projectNames.map((project, index) => {
                        return <Project key={index} title={project["title"]} description={project["description"]}/>
                    }
                )}
            </div>
        </div>
    )

}
export default ProjectsList;