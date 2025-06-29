import Nav from "../Components/Nav"
import { useState, useEffect } from 'react';
import img1 from  "../assets/crew/image-douglas-hurley.png"
import img2 from  "../assets/crew/image-mark-shuttleworth.png"
import img3 from  "../assets/crew/image-victor-glover.png"
import img4 from  "../assets/crew/image-anousheh-ansari.png"

const tabs = [
    { name: "DOUGLAS HURLEY", image: img1, role: "COMMANDER", description: "Douglas Gerald Hurley is a United States Marine Corps officer and a NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2." },
    { name: "MARK SHUTTLEWORTH", image: img2, role: "MISSION SPECIALIST", description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. He became the first South African to travel to space as a space tourist." },
    { name: "VICTOR GLOVER", image: img3, role: "PILOT", description: "Victor Jerome Glover is a NASA astronaut of the class of 2013. He is a pilot on the Crew-1 mission to the International Space Station." },
    { name: "ANOUSHEH ANSARI", image:img4, description: "Anousheh Ansari is an Iranian-American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the International Space Station, and the first Iranian in space." }
]



function Crew() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);   


  return (
    <div className="lg:bg-[url('./assets/crew/background-crew-desktop.jpg')] sm:bg-[url('./assets/crew/background-crew-tablet.jpg')] bg-[url('./assets/crew/background-crew-mobile.jpg')] bg-cover min-h-screen w-full text-white">
            <Nav/> 
        <div className="w-[80%] m-auto lg:mt-20 mt-10 md:mt-20 text-center md:text-left">
            <div className='font-BarlowCondensed text-[28px]'><span className='font-bold text-gray-500 mr-3'>01</span> pick your destination</div>


            <div className="lg:flex justify-between items-center">
                <div className="space-y-30 3xl:mt-30 mt-20 text-center lg:text-left">
                    <div className="lg:w-[80%] lg:space-y-7 cursor-default">
                        <p className="font-Bellefair text-[32px]">{tab.role}</p>
                        <p className="text-[50px] font-Bellefair">{tab.name}</p>
                        <p className="font-Barlow text-[18px] leading-relaxed w-[80%] mx-auto lg:mx-0 mt-7 lg:mt-0">
                            Douglas Gerald Hurley is a United States Marine Corps officer and a NASA astronaut. He launched on the final Space Shuttle mission, STS-135, in July 2011.
                        </p>
                    </div>
                       <div className="space-x-8 flex justify-center lg:justify-start mt-8">
                        {tabs.map((_, idx) => (
                            <button
                            key={idx}
                            className={`w-5 h-5 rounded-full transition duration-200 border-2
                                ${activeTab === idx ? 'bg-white border-white' : 'bg-g hover:bg-white/60'}
                            `}
                            onClick={() => setActiveTab(idx)}
                            aria-label={`Show ${tabs[idx].name}`}
                            ></button>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center lg:justify-end lg:items-end mt-10 lg:mt-0">
                    <img src={tab.image} alt={tab.name} className="lg:w-[539px] lg:h-[676x]  h-[540px] w-[446px] " />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Crew