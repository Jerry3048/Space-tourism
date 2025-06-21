import Nav from '../Components/Nav';
import { useNavigate } from 'react-router';


function Home() {
   const navigate = useNavigate();

  return (
    <div className='lg:bg-[url("./assets/home/background-home-desktop.jpg")] sm:bg-[url("./assets/home/background-home-tablet.jpg")] bg-[url("./assets/home/background-home-mobile.jpg")] bg-cover min-h-screen w-full'>
      <Nav />
       <div className="lg:flex  justify-between items-center w-[80%] m-auto lg:mt-50 mt-10 md:mt-20">
        <div className="text-white space-y-4  lg:w-[50%] mb-10 md:mb-20 lg:mb-0">
            <div className="md:text-[28px] text-[16px] font-Barlow flex justify-center items-center lg:justify-start lg:items-start ">
               <>SO, YOU WANT TO TRAVEL TO</> 
            </div>
            <div className="md:text-[150px] text-[80px]  font-Bellefair mt-[-20px] flex justify-center items-center leading-tight h-auto lg:justify-start lg:items-start">
               <>SPACE</>
            </div>
            <div className=" font-Barlow  md:text-[18px] text-[15px] text-center lg:text-left ">
               <>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</> 
            </div>
        </div>
       <button onClick={() => navigate('/destination')} className="relative flex items-center justify-center group  w-60 h-60 mx-auto lg:m-0">
        <div className="absolute inset-0 bg-white group rounded-full  "></div>
         <div className="absolute inset-0 bg-white/30 z-0 hover:z-1 group-hover:scale-170 group-hover:bg-white/30 rounded-full transition-transform duration-300 "></div>
           <div className="relative z-0 text-[32px] text-black uppercasefont-Bellefair ">Explore</div>
        </button>
</div>
    </div>
  )
}

export default Home;