import Image from "next/image";
import LeadSection from "@/app/section/LeadSection";
import React from "react";
import MainBackground from "@/app/components/BackgroundComponents/MainBackground";


export default function Home() {
  return (
      <main>


        <MainBackground>
          <LeadSection></LeadSection>
        </MainBackground>
      </main>
  );
}
