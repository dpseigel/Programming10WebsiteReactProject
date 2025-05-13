import { Link } from 'react-router-dom';

function ProjectCard({title, description, link, image}) {
    return (
        <div className="ProjectCard">
            <div className="cell">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img
                                src={image}
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
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
