import Image from "next/image";
import logo from "../../public/logo.jpg";
import demoImg from "../../public/download.png";
import bgImage from "../../public/finalbg.jpg";
import Footer from "@/Components/Footer";
import SideNav from "@/Components/SideNav";
import img1 from "../../public/step1-img.jpg";
import img2 from "../../public/step2-img.jpg";
import img3 from "../../public/step3-img.jpg";
import img4 from "../../public/step4-img.jpg";
import img5 from "../../public/step5-img.jpg";
import img6 from "../../public/step6-img.jpg";
import all from "../../public/allstep-img.jpg";
import plant1 from "../../public/plantIMg1.jpg";
import plant2 from "../../public/plantIMg2.jpg";
import road3 from "../../public/roadmapimg.png";
import road2 from "../../public/Frame 2.png";
import road from "../../public/Roadmap.png";
import caseStudy from "../../public/case study.jpg";
import project from "../../public/projects.jpg";
import services from "../../public/services.jpg";

export default function Formulation() {
  const sections = [
    { id: "question", label: "Question/Challenges" },
    { id: "approach", label: "Approach to Solution" },
    { id: "outcome", label: "Outcome Achieved" },
    { id: "help", label: "How Can Arcolab Help" },
  ];

  const outcome = [
    plant1,
    plant2,
    demoImg,
    demoImg,
    demoImg,
    demoImg,
    demoImg,
    demoImg,
  ];
  return (
    <div className="bg-gradient-to-r from-gradientStart via-gradientMiddle to-gradientEnd ">
      <div className="bg-white">
        <header className="flex flex-col ">
          <nav className="flex flex-row  items-center gap-[40em] border-b-2 border-gray-300">
            <div>
              <Image
                src={logo}
                alt="Company logo"
                className="xl:w-[15rem] xl:h-[10rem] lg:w-[10em]  ml-10"
              />
            </div>
          </nav>
          <section className="xl:h-[50vh] lg:h-[30vh] md:h-[25vh] relative">
            <Image
              src={bgImage}
              alt="background-img1"
              className="h-full object-cover"
            />
            <h1 className="xl:text-7xl lg:text-5xl md:text-4xl font-semibold absolute xl:bottom-20 lg:bottom-8 left-10 bg-slate-100 p-3 bg-opacity-90 text-[#0c8e62]">
              5S Implementation at Formulation Plants
            </h1>
          </section>
        </header>
        <br />
        <br />

        <main className="flex flex-col items-center justify-between mb-[10em]">
          <SideNav sections={sections} />
          <article className="ml-[5em]">
            <section id="question">
              <div className="font-semibold xl:w-4/5 lg:w-4/5 mb-4 xl:h-[35vh] lg:h-[20vh] gap-[3em] shadow-xl flex flex-row items-center justify-start pl-10 bg-gradient-to-r from-green-700 via-green-300 to-slate-700">
                <div className="xl:text-[10em] lg:text-[6em] md:text-[4em] mb-3 opacity-80  ">
                  1
                </div>

                <div className="w-[10em] font-serif xl:text-5xl lg:text-3xl md:text-2xl ">
                  Question/Challenges{" "}
                </div>
              </div>
              <div className="md:text-lg lg:text-xl xl:text-3xl ">
                <ul className="list-disc flex flex-col justify-between h-[32vh]">
                  <li className="m-4">
                    Implementation of 5S standards at technical floor comprises
                    of 10,135 sqmt
                  </li>
                  <li className="m-4">
                    130+ issues related to safety, EHS standards, cleaning,
                    replacement of rusted parts, lightening to be addressed.
                  </li>
                  <li className="m-4">
                    Achieve 60+ score out off 80 RADAR score across all areas{" "}
                  </li>
                  <li className="m-4">
                    All areas are maintained with Best-In-Class standards{" "}
                    <span className="font-bold">
                      &quot;all time readiness&quot;
                    </span>{" "}
                    for the audits
                  </li>
                </ul>
              </div>
            </section>
            <br />
            <br />
            <section id="approach">
              <div className="text-3xl font-semibold  xl:w-4/5 lg:w-4/5 mb-4 xl:h-[35vh] lg:h-[20vh] gap-[3em] shadow-xl flex flex-row items-center justify-start pl-10 bg-gradient-to-r from-green-700 via-green-300 to-slate-700">
                <div className="xl:text-[10em] lg:text-[4em] md:text-[4em] mb-3 opacity-80  ">
                  2
                </div>

                <div className="w-[15em] xl:text-5xl lg:text-3xl md:text-2xl font-serif ">
                  {" "}
                  Approach to the Solution
                </div>
              </div>

              <div className="xl:text-4xl lg:text-2xl mt-10">
                We Approached the problem with a{" "}
                <span className="font-semibold"> Six-Step Process:</span>
                <Image
                  src={road}
                  alt="process image"
                  className="shadow-lg w-4/5 mb-10 mt-10"
                />
              </div>
              {/* <div className="mt-10 w-4/5 flex flex-row justify-around">
              <span className="flex flex-col justify-center items-center">
                <Image src={demoImg} alt="img1" className="w-[25em] h-[20em]" />
                <span>This is above image ............</span>
              </span>
              <span className="flex flex-col justify-center items-center">
                <Image src={demoImg} alt="img1" className="w-[25em] h-[20em]" />
                <span>This is above image ............</span>
              </span>
            </div> */}
            </section>
            <section id="outcome">
              <div className="text-3xl font-semibold mb-10  xl:w-4/5 lg:w-4/5 xl:h-[35vh] lg:h-[20vh] gap-[3em] shadow-xl flex flex-row items-center justify-start pl-10 bg-gradient-to-r from-green-700 via-green-300 to-slate-700">
                <div className="xl:text-[10em] lg:text-[4em] md:text-[4em] mb-3 opacity-80  ">
                  3
                </div>

                <div className="w-[10em] xl:text-5xl lg:text-3xl md:text-2xl font-serif ">
                  {" "}
                  Outcome{" "}
                </div>
              </div>
              <div className="w-4/5 text-2xl font-normal mb-10"></div>
              <div className="grid grid-cols-4 gap-4 xl:mr-[25.5em] lg:mr-[14em]">
                {outcome.map((img, index) => (
                  <div key={index} className="relative">
                    <span
                      className={`absolute top-0 left-0 w-full text-center text-black bg-slate-100 font-bold ${
                        index === 0 || index % 2 === 0 ? "before" : "after"
                      }`}
                    >
                      {index === 0 || index % 2 === 0 ? "before" : "after"}
                    </span>
                    <Image
                      src={img}
                      alt="img"
                      className="xl:w-[25em] xl:h-[20em] lg:w-[15em] lg:h-[10em]"
                    />
                  </div>
                ))}
              </div>
            </section>
            <section id="help" className="mt-[10em]">
              <div className="text-3xl font-semibold mb-4  xl:w-4/5 lg:w-4/5 xl:h-[35vh] lg:h-[20vh] gap-[3em] shadow-xl flex flex-row items-center justify-start pl-10 bg-gradient-to-r from-green-700 via-green-300 to-slate-700">
                <div className="xl:text-[10em] lg:text-[4em] md:text-[4em] mb-3 opacity-80  ">
                  4
                </div>

                <div className="w-[10em] xl:text-5xl lg:text-3xl md:text-2xl font-serif ">
                  {" "}
                  What Arcolab can do for you?
                </div>
              </div>

              <div className="xl:text-3xl lg:text-xl font-normal ">
                Acrolab specializes in operational excellence and can help
                companies successfully implement the 5S
                <br className="xl:hidden lg:inline-block" />
                methodology.
                <br />
                <br />
                Here’s a streamlined approach Acrolab offers:
                <ul className="flex flex-col justify-between items-start list-disc h-[25vh] lg:w-4/5 mt-5 mb-10">
                  <li>
                    Team Formation: Assist in creating a cross-functional team
                    to lead the 5S initiative.
                  </li>
                  <li>
                    Training: Provide tailored training to ensure employees
                    understand 5S principles and benefits.
                  </li>
                  <li>
                    Pilot Projects: Start with a specific area, redesign it
                    using 5S, and set a benchmark for broader implementation.
                  </li>
                  <li>
                    Performance Tracking: Establish clear KPIs to measure waste
                    reduction, efficiency improvements, and safety enhancements.
                  </li>
                  <li></li>
                </ul>
                By partnering with Acrolab, companies can streamline processes,
                eliminate waste, and build{" "}
                <br className="xl:hidden lg:inline-block" />a culture of
                efficiency and <br className="xl:inline-block lg:hidden" />
                safety, ensuring long-term success.
              </div>
              <br />
              <div className="flex flex-col justify-center xl:w-4/5 lg:w-3/5 items-start">
                <span className="text-xl font-bold underline m-10">
                  {" "}
                  Know More About Us
                </span>
                <div className="flex flex-row gap-[5em]">
                  <span className="xl:w-[15em] xl:h-[25em] lg:w-[10em] lg:h-[20em] flex flex-col rounded-3xl items-center shadow-lg relative hover:scale-105 cursor-pointer">
                    <Image
                      src={caseStudy}
                      alt="img"
                      className="w-full h-full object-cover opacity-60 rounded-3xl drop-shadow-lg"
                    />
                    <div className="absolute bottom-5 xl:text-3xl lg:text-2xl font-bold rounded-full">
                      Case Studies
                    </div>
                  </span>
                  <span className="xl:w-[15em] xl:h-[25em] lg:w-[10em] lg:h-[20em] rounded-3xl flex flex-col items-center shadow-lg relative hover:scale-105 cursor-pointer">
                    <Image
                      src={project}
                      alt="img"
                      className="w-full h-full object-cover opacity-60 rounded-3xl"
                    />
                    <div className="absolute bottom-5 xl:text-3xl lg:text-2xl font-bold rounded-full">
                      Projects
                    </div>
                  </span>
                  <span className="xl:w-[15em] xl:h-[25em] lg:w-[10em] lg:h-[20em] rounded-3xl flex flex-col items-center shadow-lg relative hover:scale-105 cursor-pointer">
                    <Image
                      src={services}
                      alt="img"
                      className="w-full h-full object-cover opacity-60 rounded-3xl"
                    />
                    <div className="absolute bottom-5 xl:text-3xl lg:text-2xl font-bold rounded-full">
                      Services
                    </div>
                  </span>
                </div>
              </div>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
