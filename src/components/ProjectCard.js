import { Link } from 'react-router-dom';

function ProjectCard({title, description, link}) {
    return (
        <div className="ProjectCard">
            <div className="cell">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title project-title">{title}</p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            {description}
                        </div>
                    </div>
                    <footer className="card-footer">
                        <Link to={link} className="card-footer-item">View</Link>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
