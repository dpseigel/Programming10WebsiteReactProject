import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link class="navbar-item" to="/">
                        <h1 class="title">DS</h1>
                    </Link>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <Link class="navbar-item" to="/projects">
                            <p>Projects</p>
                        </Link>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                More
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item" href="/about">
                                    About
                                </a>
                                <a class="navbar-item" href="/counterthing">
                                    CounterThing
                                </a>
                                <a class="navbar-item" href="/animationthing">
                                    AnimationThing
                                </a>
                                <a class="navbar-item" href="/programmingclass">
                                    Programming Class
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary is-outlined" href="mailto:help@origamistudios.ca">
                                    Email
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
