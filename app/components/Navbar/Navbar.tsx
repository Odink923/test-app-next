import React from 'react';
import NavbarButton from "@/app/components/Buttons/NavbarButton/NavbarButton";
import NavbarSoonButton from "@/app/components/Buttons/NavbarButton/NavbarSoonButton";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex ml-12 mt-8 mr-12 justify-between">
            <div className="flex items-center space-x-3.5">
                <img src="/logoCreon.svg" alt="none" style={{userSelect:"none"}}/>
                <img src="/textLogo.svg" alt="none" style={{userSelect:"none"}}/>
            </div>
            <div className="flex items-center">
                <div className="space-x-10 display flex">
                    <NavbarButton >Creon Pass</NavbarButton>
                    <NavbarSoonButton >Token</NavbarSoonButton>
                    <NavbarSoonButton>AI Revenue</NavbarSoonButton>
                    <NavbarSoonButton>AI Launchpad</NavbarSoonButton>
                </div>
                <button
                    className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-8 border border-white-500 hover:border-transparent rounded ml-14 mt-2 mb-2">Connect
                </button>

            </div>
        </div>
    );
};

export default Navbar;