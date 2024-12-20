"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import img1 from '../../public/conIMg1.jpg'
import img2 from '../../public/conIMg2.jpg'
import img3 from '../../public/plantIMg1.jpg'
import img4 from '../../public/plantIMg2.jpg'

function CaseStudyDisplay() {
  const imageSet =  [{
    link:img1,
    tag:"Conference Image 1",
  },
  {
    link:img2,
    tag:"Conference Image 2",
  },
  {
    link:img3,
    tag:"Plant Photo 1",
  },
  {
    link:img4,
    tag:"Plant Photo 2",
  }
]
  return (
    <div className="grid grid-cols-6 w-[100em] h-[50vh] shadow-xl">
      <div className="border-r-2 border-black p-3 ">
        <ul className="flex flex-col justify-evenly h-[15vh] tex-2xl font-semibold italic ">
          <li className='scale-105 w-full h-10 shadow-lg p-2 relative before:content-[" "] before:absolute  before:top-0 before:right-0 before:w-0 before:h-0 before:border-t-80 before:border-t-white before:border-l-80 before:border-l-red '>
            Achievements
          </li>
          <li className='scale-105 w-full h-10 shadow-lg p-2 relative before:content-[" "] before:absolute  before:top-0 before:right-0 before:w-0 before:h-0 before:border-t-80 before:border-t-white before:border-l-80 before:border-l-red '>Conferences</li>
        </ul>
      </div>
      <div className="col-start-2 col-end-7 border-2 border-black">
        {imageSet.map((img,index)=>(
          <Image key={index} src={img.link} alt={img.tag} className="w-[35em] h-[30em]" />
        ))}

      </div>
    </div>
  );
}

export default CaseStudyDisplay;
