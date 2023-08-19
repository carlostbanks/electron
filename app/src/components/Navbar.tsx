import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
    return (
        <div className='navbar bg-base-100'>
            <div className='flex-1'>
                <Link to="/" className='btn btn-ghost normal-case text-xl'>
                Electron App
                </Link>
            </div>

            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link to='/work'>Work</Link>
                    </li>
                    <li tabIndex={0}>
                    </li>
                </ul>
                <div className='dropdown dropdown-end'>

                </div>
            </div>
        </div>
    )
}