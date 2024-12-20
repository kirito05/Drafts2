"use client";
import React, { useState } from "react";

import FooterImgCard from "./FooterImgCard";
import profile1 from "../../public/shankar.jpeg"
import profile2 from "../../public/karthik.jpeg"
import profile3 from "../../public/vibhor.jpeg"

function Footer() {
  const details = [
    {
      name: "Shankar",
      role: "Head Of Operational Excellence @Acrolab",
      profilePic:profile1,
      linkedIN: "https://www.linkedin.com/in/shankar-rajkumar-pmp%C2%AE-csm%C2%AE-lean-expert-524917144/"
    },
    {
      name:"karthik",
      role:"Associate Head of the Department",
      profilePic:profile2,
      linkedIN: "https://www.linkedin.com/in/karthick-r-8971aa92/"
    },
    {
      name: "Vibhor",
      role: "Deputy Head of Operational Excellence @Arcolab",
      profilePic:profile3,
      linkedIN: "https://www.linkedin.com/in/vibhornaidu2603/"
    },
  ];
  return (
    <footer className=" border-t-2 border-black flex flex-col items-start gap-5">
        <span className="text-3xl font-semibold p-5">Team Members</span>
        <div className="ml-10 flex flex-row justify-evenly xl:w-3/5 lg:w-3/5">
        {details.map((member, index) => {
        return (
          <FooterImgCard
            key={index}
            memberName={member.name}
            role={member.role}
            pic={member.profilePic}
            publicProfile={member.linkedIN}
          />
        );
      })}

        </div>
      
    </footer>
  );
}

export default Footer;
