import { Outlet, Link, useLocation } from 'react-router-dom'
import './Layout.css'

function Layout() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            <nav>
                <ul>
                    <li><a><Link className={currentPath == "/" ? "active" : ""} to="/">Home</Link></a></li>
                    <li><a><Link className={currentPath == "/about" ? "active" : ""} to="/about">About</Link></a></li>
                    <li><a><Link className={currentPath == "/projects" ? "active" : ""} to="/projects">Projects</Link></a></li>
                    <li><a><Link className={currentPath == "/experiences" ? "active" : ""} to="/experiences">Experiences</Link></a></li>
                    <li><a><Link className={currentPath == "/contact" ? "active" : ""} to="/contact">Contact</Link></a></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout