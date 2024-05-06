import React from 'react';


const OurVisionButton = () => {
    return (
        <div className="flex flex-col pl-40">
            <div className="flex">
                <div>
                    <img src="/buttonOurvision1.svg" alt="none" style={{userSelect: "none"}}/>
                </div>

                <div className="font-satoshiBold flex flex-col pl-7 pt-5 text-22">
                    <span>Profitability and</span>
                    <span>Growth</span>
                </div>
                <div className="pl-52 pt-7">
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8L7 2L13 8" stroke="white" stroke-width="1.5"/>
                    </svg>
                </div>
            </div>

            <div className="pl-28">At Creon, we handpick cutting-edge AI projects and offer our community and token
                holders early access and investment opportunities.
                Our community actively contributes to the growth and
                profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
            </div>
        </div>
    );
};

export default OurVisionButton;