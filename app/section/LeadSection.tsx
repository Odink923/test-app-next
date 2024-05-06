import React from 'react';
import Navbar from "@/app/components/Navbar/Navbar";

const LeadSection = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="ml-60 mr-60" >
                <div style={{marginTop: "481px"}}>
                    <div className="  uppercase flex flex-col text-7xl font-momentExtended pb-10">
                       <span>
                           {/* eslint-disable-next-line react/no-unescaped-entities */}
                        The world's first
                           </span>
                        <span>
                        platform for Tokenizing
                            </span>
                        <span>
                        AI blockchain projects
                            </span>
                    </div>

                    <span className="relative inline-block pt-3 pb-3">
                     <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-custom to-purple-custom"></span>
                      <span
                        className="text-22 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-custom to-purple-custom">Hold the Creon Pass NFT and earn passive income from AI Tools</span>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-custom to-purple-custom  "></span>
                    </span>
                </div>

            </div>

        </div>
    );
};

export default LeadSection;