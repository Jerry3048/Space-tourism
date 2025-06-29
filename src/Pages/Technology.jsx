import Nav from '../Components/Nav';
import { useState, useEffect } from 'react';
import img1 from '../assets/technology/image-launch-vehicle-portrait.jpg'
import img2 from '../assets/technology/image-spaceport-portrait.jpg'
import img3 from '../assets/technology/image-space-capsule-portrait.jpg'



const tabs = [
    { name:"1", terminology: 'Launch Vehicle', image:img1, definition: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. OurWEB-X carrier rocket is the most powerful in operation.Standing 150 meters tall, it"s quite an awe-inspiring sight on the launch pad!'},

    { name:"2", terminology: 'Spaceport', image: img2, definition: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch." },

    { name:"3", terminology: 'Space Capsule', image: img3, definition: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained." },
]


function Technology() {
    const [activeTab, setActiveTab] = useState(0);
    const tab = tabs[activeTab];

useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);     


  return (
    <div className="lg:bg-[url('./assets/technology/background-technology-desktop.jpg')] sm:bg-[url('./assets/technology/background-technology-tablet.jpg')] bg-[url('./assets/technology/background-technology-mobile.jpg')] bg-cover min-h-screen w-full text-white">
        <Nav />
       <div className=' lg:ml-[200px] lg:mt-20 mt-10 md:mt-20 text-center lg:text-left'> 
            <div className='m-auto font-BarlowCondensed text-[28px]'><span className='font-bold text-gray-500 mr-3'>03</span> SPACE LAUNCH 101</div>

            <div className='lg:flex justify-between items-center space-y-8 lg:space-y-0 mt-20' >

                <div>
                    <img src={tab.image}alt="Launch Vehicle" className='w-full md:h-[357px] h-[322px] lg:hidden' />
                </div>
              <div className="lg:flex space-y-6 lg:flex-col space-x-5 justify-center items-center lg:justify-start lg:items-start">
                         {tabs.map((t, idx) => (
                            <button
                            key={t.name}
                            className={`w-10 h-10 rounded-full 
                                ${activeTab === idx ? 'bg-white text-black' : 'text-white hover:border-white transition duration-200 border-1  border-gray-500'}
                            `}
                            onClick={() => setActiveTab(idx)}
                            >
                            {t.name}
                            </button>
                        ))}
                    </div>
                <div className='lg:w-[50%] text-center lg:text-left space-y-5 lg:space-y-7'>
                    <div className='font-Bellefair lg:text-[32px] md:text-[24] text-[15px] text-gray-500'>THE TERMINOLOGY...</div>
                    <div className='font-Bellefair text-[24px] md:text-[40px] lg:text-[56px] uppercase'>{tab.terminology}</div>
                    <div className='font-Barlow text-[18px] w-[90%] lg:w-[0px]leading-relaxed mx-auto lg:mx-0 mt-7 lg:mt-0'>
                      {tab.definition}
                    </div> 
                </div>
                <div className = "hidden lg:block">
                    <img src={tab.image}alt="Launch Vehicle" className='w-[400px] h-[400px]' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Technology