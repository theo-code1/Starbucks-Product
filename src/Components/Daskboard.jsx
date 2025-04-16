import StarbucksLogo from '../Assets/Starbucks-logo.webp';
import StarCoffee from '../Assets/starbucks-ice-coffee.webp';
import BgText from '../assets/bg-text2.svg';


const Dashboard = () => {
    return (
        <section className="dashboard h-screen pt-4 bg-gradient-to-r from-green to-light-green relative overflow-hidden">
            <nav className="navBar w-[95%] mx-auto h-[8vh] flex items-center justify-between text-white z-40 animate-go-down ">
                <img src={StarbucksLogo} draggable={false} alt="StarbucksLogo" className='size-18 select-none'/>
                <ul className='flex items-center gap-8 font-[400] text-[1rem] z-50'>
                    <li className='hover:opacity-70 transition-all duration-100'><a href='#'>Dashboard</a></li>
                    <li className='hover:opacity-70 transition-all duration-100'><a href='#'>Coffee</a></li>
                    <li className='hover:opacity-70 transition-all duration-100'><a href='#'>Customization</a></li>
                    <li className='hover:opacity-70 transition-all duration-100'><a href='#'>Seasonable</a></li>
                </ul>
                <button className='bg-dark-green px-6 py-3 rounded-lg font-medium hover:brightness-75 transition-all duration-150'>Order Now</button>
            </nav>
            <div className="Product">
                <img src={StarCoffee} alt="Ice Coffee" draggable={false} className='animate-go-up lg:size-[45rem] md:size-[80vw] absolute left-1/2 top-1/2 -translate-1/2 rotate-15 z-20 select-none' />
                <img src={BgText} alt="Background Text" draggable={false} className="animate-go-scale lg:size-[42rem] md:size-[60dvw] absolute top-1/2 left-1/2 -translate-1/2 z-0 select-none" />

            </div>
            <div className="left-b-text text-white gap-4 h-auto w-[400px] absolute lg:bottom-8 left-6 animate-go-right">
                <h1 className='text-5xl font-bold mb-4'>Starbucks</h1>
                <p className='text-lg font-light leading-[29px]'>A rich, creamy blend of Starbucks® coffee, milk, and ice with mocha sauce, all topped with whipped cream and drizzled with chocolate syrup</p>
            </div>
            <div className="right-b-text w-[400px] absolute lg:bottom-8 md:bottom-[] right-6 text-white animate-go-left">
                <p className='text-lg font-light leading-[29px] text-right'>globally recognized coffeehouse chain founded in 1971 in Seattle, Washington. Known for its premium coffee, handcrafted beverages. offers a wide range of drinks and snacks, emphasizing quality, sustainability, and community connection.</p>
            </div>
        </section>
    );
}
export default Dashboard;