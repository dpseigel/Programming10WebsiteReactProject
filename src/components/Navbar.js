import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <h1 className="title">DS</h1>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/projects">
                            <p>Projects</p>
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item" href="/about">
                                    About Me
                                </a>
                                <a className="navbar-item" href="/aboutyou">
                                    About You
                                </a>
                                <a className="navbar-item" href="/counterthing">
                                    CounterThing
                                </a>
                                <a className="navbar-item" href="/animationthing">
                                    AnimationThing
                                </a>

                                <a className="navbar-item" href="/programmingclass">
                                    Programming Class
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary is-outlined" href="mailto:help@origamistudios.ca">
                                    Email
                                </a>
                                <a className="button is-white is-outlined" href="https://github.com/dpseigel">
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
