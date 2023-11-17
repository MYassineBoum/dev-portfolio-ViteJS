import { Outlet, Link } from 'react-router-dom'
import './Layout.css'

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li><a><Link to="/">Home</Link></a></li>
                    <li><a><Link to="/about">About</Link></a></li>
                    <li><a><Link to="/projects">Projects</Link></a></li>
                    <li><a><Link to="/experiences">Experiences</Link></a></li>
                    <li><a><Link to="/contact">Contact</Link></a></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout