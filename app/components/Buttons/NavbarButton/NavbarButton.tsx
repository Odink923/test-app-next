import React from 'react';

interface Children {
    children: React.ReactNode;

}
const NavbarButton:React.FC<Children> = ({children}) => {
    return (
        <span  className="text-lg h-6 font-satoshiBold text-white hover:text-blue-500">
            {children}
        </span>
    );
};

export default NavbarButton;