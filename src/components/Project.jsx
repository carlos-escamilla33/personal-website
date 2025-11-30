
const Project = ({title, description}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default Project;