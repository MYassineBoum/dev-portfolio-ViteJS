import React from 'react'
import { Outlet, Link } from 'react-router-dom'

type Route = {
    path: string;
    name: string;
}

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/experiences">Expriences</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout