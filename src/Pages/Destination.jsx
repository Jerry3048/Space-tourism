import { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import MoonImg from '../assets/destination/image-moon.png';
import MarsImg from '../assets/destination/image-mars.png';
import EuropaIng from  '../assets/destination/image-europa.png';
import TitanImg from  '../assets/destination/image-titan.png';

const tabs = [
    { name: 'Moon', description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apolo 11 landing sites.", image: MoonImg, distance: '384,400 km', travelTime: '3 DAYS' },

    { name: 'Mars', description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!", image: MarsImg, distance: '225 mil. km', travelTime: '9 MONTHS' },

    { name: 'Europa',description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabi", image:EuropaIng, distance: '628 mil. km', travelTime: '3 YEARS' },

    { name: 'Titan', description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", image: TitanImg, distance: '1.6 bil. km', travelTime: '7 YEARS' }
]

function Destination() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);  


  return (
    <div className='lg:bg-[url("./assets/destination/background-destination-desktop.jpg")] sm:bg-[url("./assets/destination/background-destination-tablet.jpg")] bg-[url("./assets/destination/background-destination-mobile.jpg")] bg-cover min-h-screen w-full text-white'>
        <Nav/>
        <div className='w-[80%] m-auto lg:mt-20 mt-10 md:mt-20 text-center md:text-left space-y-5 sm:space-y-10 lg:space-y-15 '>
            <div className='font-BarlowCondensed text-[28px]'><span className='font-bold text-gray-500 mr-3'>01</span> pick your destination</div>

            <div className='lg:flex justify-between items-center space-y-8 lg:space-y-0' >  
                    <div className='flex justify-center items-center'>
                        <img src={tab.image}  
                        alt={tab.name} 
                        className='w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]' />
                    </div>

                    <div className='lg:w-[50%] text-center lg:text-left lg:space-y-7 '>
                        <div className='flex justify-center items-center lg:justify-start lg:items-start space-x-5'>
                        {tabs.map((t, idx) => (
                            <button
                            key={t.name}
                            className={`text-[16px] font-BarlowCondensed uppercase hover:underline hover:underline-offset-10 hover:decoration-2 hover:decoration-gray-500
                                ${activeTab === idx ? 'underline underline-offset-8 decoration-2' : ''}
                            `}
                            onClick={() => setActiveTab(idx)}
                            >
                            {t.name}
                            </button>
                        ))}
                        </div>
                        <div className='font-Bellefair text-[80px] md:text-[96px] uppercase'>{tab.name}</div>
                        <div className='font-Barlow text-[18px] leading-relaxed mb-7 '>
                          {tab.description}
                        </div>
                        <div className='border border-gray-700'></div>

                        <div className='md:flex md:justify-between justify-center items-center md:w-[80%]  mt-5 space-y-5 md:space-y-0 lg:space-y-0'>
                            <div> 
                                <p class=" text-gray-500 font-BarlowCondensed text-[14px] uppercase">AVG. DISTANCE</p>
                                <p class="text-[28px] font-Bellefair"> {tab.distance}</p>
                            </div>
                            <div> 
                                <p class="text-sm text-gray-500 font-BarlowCondensed uppercase text-[14px]">EST. TRAVEL TIME</p>
                                <p class="text-[28px] font-Bellefair"> {tab.travelTime}</p>
                            </div>
                        </div>
                    </div>
               
            </div>

        </div>
    </div>
  )
}

export default Destination