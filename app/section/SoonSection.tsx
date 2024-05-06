import React, {useState} from 'react';
import TokenComponent from "@/app/components/TokenComponent/TokenComponent";

const SoonSection = () => {

    return (
        <div className="ml-60 mr-60 pb-40 pt-20">
            <div className="flex space-x-10 ">
                <TokenComponent condition={true} subTitle="The Gateway token to the world of AI" title="token"><img src="/token1.png"/></TokenComponent>
                <TokenComponent condition={false} subTitle="Driving income and growth through decentralization" title="revenue"><img src="/token2.png"/></TokenComponent>
                <TokenComponent condition={true} subTitle="Driving the future of AI Innovation" title="launchpad"><img src="/token3.png"/></TokenComponent>

            </div>

        </div>
    );
};

export default SoonSection;