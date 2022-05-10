import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import'./style.css';

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DsMovie2</h1>
                    <a href="https://github.com/Bluizpro" target='_blank' rel="noreferrer">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/Devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;