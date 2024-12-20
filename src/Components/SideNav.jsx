'use client'
import React,{useEffect,useState} from 'react'
import {motion,useScroll,useSpring} from 'motion/react'


function SideNav({sections}) {
    const handleScroll = (id)=>{
        const section = document.getElementById(id);
        
        if(section){
            const offset = 80
            const sectionPosition = section.offsetTop - offset
            window.scrollTo({
                top:sectionPosition,
                behavior: "smooth",
            })
        }

    }

    const {scrollYProgress} = useScroll();
    const scaleX= useSpring(scrollYProgress,{
      stiffness:100,
      damping:30,
      restDelta:0.001
    })
    // const [activeSection, setActiveSection] = useState(null);

    // useEffect(() => {
    //     const observerOptions = {
    //         root: document.getElementById(sections[0].id),
    //         rootMargin: '0px', 
    //         threshold: 1.0,
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 setActiveSection(entry.target.id);
    //             }
    //         });
    //     }, observerOptions);

    //     sections.forEach((section) => {
    //         const sectionElement = document.getElementById(section.id);
    //         if (sectionElement) observer.observe(sectionElement);
    //     });

    //     return () => {
    //         sections.forEach((section) => {
    //             const sectionElement = document.getElementById(section.id);
    //             if (sectionElement) observer.unobserve(sectionElement);
    //         });
    //     };
    // }, [sections]);

   
    

  return (
    <aside className="w-full shadow-lg h-[6em]  p-5 ml-2 sticky top-0 self-start bg-white z-10 mb-16">
      <motion.div className='' />
          <nav>
            <ol className="list-decimal flex flex-row items-center justify-between font-light pl-2 xl:text-2xl lg:text-xl md:text-xl">
                {sections.map((section)=>(
                    <li key={section.id}
                    className={`cursor-pointer hover:scale-105 hover:shadow-lg text-start font-normal xl:w-[12em] xl:h-[2em] lg:w-[10em] lg:h-[2em] md:w-[10em] md:h-[2em] `}
                    onClick={()=>handleScroll(section.id)}

                    >
                     {section.label}

                    </li>

                ))}
              {/* <li className="cursor-pointer hover:scale-105 hover:shadow-lg w-[10em] h-[2em] text-center">
                Question/Challenges
              </li>
              <li className="cursor-pointer hover:scale-105 hover:shadow-lg w-[12em] h-[2em] text-center">
                Approach to the Solution
              </li>
              <li className="cursor-pointer hover:scale-105 hover:shadow-lg w-[10em] h-[2em] text-center ">
                Outcome
              </li>
              <li className="cursor-pointer hover:scale-105 hover:shadow-lg w-[10em] h-[2em] text-center">
                How can Arcolab help
              </li> */}
            </ol>
          </nav>
        </aside>
  )
}

export default SideNav