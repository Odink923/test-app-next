import React from 'react';
interface Children {
    children: React.ReactNode;

}
const MainBackground:React.FC<Children>  = ({children}) => {

    return (
        <div className="fixed top-0 left-0 w-full h-full z-0">
            <video
                muted
                loop
                autoPlay
                className="fixed -top-2 left-0 min-w-full min-h-full -z-50 object-cover"
            >
                <source src='/videos/main-background-video.mp4' type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            {children}
        </div>
    );
};

export default MainBackground;