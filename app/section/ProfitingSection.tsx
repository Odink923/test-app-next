import React from 'react';

const ProfitingSection = () => {
    return (
        <div className="ml-60 mr-60 pt-10 pb-20">
            <div className="flex flex-col">
            <span className="text-7xl font-momentExtended">Profiting Through</span>
                <div className="flex justify-end">
            <span
                className="text-4xl font-momentExtended bg-clip-text text-transparent bg-gradient-to-r from-blue-custom pt-5 to-purple-custom">
                    AI Innovation & Decentralization</span>
            </div>

                <div className="flex">
                    <div className="relative mt-40 mr-10">
                        <video className="relative z-10" muted loop autoPlay>
                            <source src='/videos/creon-logo.mp4' type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="pt-20 mt-40 pl-7 pr-7 flex flex-col border-l-2 border-r-2 border-grey-custom">

                        <span className="text-22 font-satoshiBold">The dynamic community driven business model of the future.</span>
                        <span className="text-18 pt-4 font-satoshiRegular">At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability.
                            This approach empowers our community, as our NFT and token holders directly
                            benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our
                            community and for the projects we launch.</span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfitingSection;