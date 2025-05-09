import { Link } from 'react-router-dom';

function ProjectCard({title, description, link}) {
    return (
        <div className="ProjectCard">
            <div class="cell">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title project-title">{title}</p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            {description}
                        </div>
                    </div>
                    <footer class="card-footer">
                        <Link to={link} class="card-footer-item">View</Link>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
