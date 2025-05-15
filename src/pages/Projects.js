import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div className="Projects">
            <section className="hero is-large">
                <div className="hero-body">
                    <h1 className="title main-title">PROJECTS</h1>
                </div>
            </section>
            <div className="fixed-grid has-3-cols">
                <div className="grid">
                    <ProjectCard 
                    title={"PYTHON PROJECT"} 
                    description={"A small demo of a replica of the game The Legend of Zelda using processing."} 
                    link={"pythonproject"}
                    image="images/pythonprocessingproject.png"
                    />

                    <ProjectCard 
                    title={"MAKING A WEBSITE"} 
                    description={"A website created using React and Bulma."} 
                    link={"websiteproject"}
                    image="images/websiteimageprojec.png"
                    />
                    <ProjectCard
                        title={"P5 JS animations"}
                        description={"epic animations of doom yayayayayayaya"}
                        link={"/animationthing"}
                        image="images/handsomeguy.png"
                    />

                </div>
            </div>
        </div>
    );
}

export default Projects;
