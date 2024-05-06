import React from 'react';

const CreonPassSection = () => {
    return (
        <div className="ml-60 mr-60  ">
            <div
                className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-black to-transparent z-20"></div>
            <div className="flex">
                <div className="pt-40 pb-40">
                    <div className="text-7xl font-momentExtended flex flex-col  ">
                        <span>CREON PASS</span>
                        <span>NFT</span>
                    </div>
                    <hr className="border-grey-custom mt-5 mb-5"/>
                    <div className="flex flex-col ">
                <span
                    className="text-22 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-custom to-purple-custom">
                    The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI- driven tools</span>
                    </div>
                    <div className="font-satoshiRegular text-18 mt-10">

                        <div className="border-2 border-grey-custom rounded-md pl-4 pr-4 pt-3 pb-3 mb-4 inline-block">
                            Pre-launch investment opportunities for upcoming AI projects
                        </div>
                        <div className="border-2 border-grey-custom rounded-md pl-4 pr-4 pt-3 pb-3 mb-4 inline-block">
                            Free and early access to Creon built AI projects
                        </div>
                        <div className="border-2 border-grey-custom rounded-md pl-4 pr-4 pt-3 pb-3 mb-4 inline-block">
                            Higher allocation limits on the Creon AI Launchpad
                        </div>
                        <div className="border-2 border-grey-custom rounded-md pl-4 pr-4 pt-3 pb-3 mb-4 inline-block">
                            Revenue share distribution from Creon built AI projects
                        </div>
                    </div>

                    <div style={{marginTop: "72px"}}>
                        <button
                            className="bg-gradient-to-r from-blue-custom to-purple-custom hover:from-blue-custom hover:to-blue-custom text-white font-semibold py-4 px-40 rounded font-satoshiBold ">
                            Buy Creon Pass
                        </button>
                    </div>
                </div>
                <div className="relative mt-40 ml-10">
                    <video className="relative z-10" muted loop autoPlay>
                        <source src='/videos/nft-video.mp4' type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent z-20"></div>
                    <div
                        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20"></div>
                </div>
            </div>
        </div>
    );
};

export default CreonPassSection;