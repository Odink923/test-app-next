import React from 'react';

interface Children {
    children: React.ReactNode;

}
const NavbarSoonButton:React.FC<Children> = ({children} ) => {
    return (
        <div className="display font-satoshiBold flex">
            <span className="text-lg h-6 text-white">{children}</span>
            <span className="text-purple-600 bg-black rounded-full pl-2 pr-2 text-xs font-satoshiBold mb-2">SOON</span>
        </div>
    );
};

export default NavbarSoonButton;