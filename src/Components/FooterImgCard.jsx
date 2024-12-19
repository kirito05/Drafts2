"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import demoImg from "../../public/download.png";

function FooterImgCard({ memberName, role,pic,publicProfile }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center relative"
    >
        <Image
          src={pic}
          alt="member photo"
          className="xl:h-[30vh] xl:w-[18em] lg:w-[10em] lg:h-[25vh] md:h-[15vh] md:w-[15em] sm:h-[15vh] sm:w-[15em]"
          style={{borderRadius:"20em"}}
        />
      <div className="xl:text-3xl lg:text-xl hover:scale-105 absolute bg-white bg-opacity-75 xl:bottom-10 lg:bottom-4 w-[10em] overflow-hidden text-center h-10 ">
        <Link href={publicProfile}>{memberName}</Link>

      </div>
    </div>
  );
}

export default FooterImgCard;
