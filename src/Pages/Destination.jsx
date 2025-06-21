import { useState } from 'react'
import Nav from '../Components/Nav'


const tabs = [
    { name: 'Moon', image: './assets/destination/image-moon.png', distance: '384,400 km', travelTime: '3 DAYS' },
    { name: 'Mars', image: './assets/destination/image-mars.png', distance: '225 mil. km', travelTime: '9 MONTHS' },
    { name: 'Europa', image: './assets/destination/image-europa.png', distance: '628 mil. km', travelTime: '3 YEARS' },
    { name: 'Titan', image: './assets/destination/image-titan.png', distance: '1.6 bil. km', travelTime: '7 YEARS' }
]

function Destination() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];


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
                        <div className='font-Bellefair text-[80px] md:text-[96px]'>MOON</div>
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