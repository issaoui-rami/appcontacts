import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-primary mb-3 py-3">
                <div className="container">
                    <a href="/">App Contacts</a>

                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item d-inline-block mr-3">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-3">
                            <Link to="/ajoute">Ajouter</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-3">
                            <Link to="/apropos">À-propos</Link>
                        </li>
                        
                    </ul>

                </div>
            </nav>
        </React.Fragment>
    )
}
