import React from 'react';
import './style.css'
import { GiBookshelf } from "react-icons/gi";


function Navbar (){
    return (
        <>
        <div className="navbar bg-primary h-[72px]">
            <div className="flex-1 ms-8">
                <GiBookshelf size={30} className='text-neutral'/>
                <a className=" text-2xl text-base-100 font-serif"> Ringkas.com</a>
            </div>
            <div className="flex  me-8">
                <ul className="menu menu-horizontal gap-6 text-md font-medium text-base-100">
                    <li><a id='nav' href='/'>Home</a></li>
                    <li><a id='nav'>Courses</a></li>
                    <li><a id='nav'>About Us</a></li>
                    <li><a id='nav'>Progam</a></li>
                </ul>
            </div>
            <div className="flex flex-row gap-4 me-8">
                <a className="btn btn-sm btn-neutral rounded-full text-md text-base-100 w-24" id='hire1'>Sign Up</a>
                <a className="btn btn-sm btn-neutral rounded-full text-md text-base-100 w-24" id='hire2'>Login</a>
            </div>
        </div>
        </>
    )
}

export default Navbar;