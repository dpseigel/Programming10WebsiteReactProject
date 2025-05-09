import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div className="Projects">
            <section class="hero is-large">
                <div class="hero-body">
                    <h1 class="title main-title">PROJECTS</h1>
                </div>
            </section>
            <div class="fixed-grid has-3-cols">
                <div class="grid">
                    <ProjectCard 
                    title={"PYTHON PROJECT"} 
                    description={"A small demo of a replica of the game The Legend of Zelda using processing."} 
                    link={"pythonproject"}/>
                    <ProjectCard 
                    title={"MAKING A WEBSITE"} 
                    description={"A website created using React and Bulma."} 
                    link={"pythonproject"}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
