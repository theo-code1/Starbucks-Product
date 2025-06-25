import StarCoffee from '../Assets/starbucks-ice-coffee.webp';
import BgText from '../assets/bg-text2.svg';


const Dashboard = () => {
    return (
        <section className="overview-section h-[110dvh] md:h-[100dvh] lg:h-screen pt-4 bg-gradient-to-r from-green to-light-green relative overflow-hidden ">
            <div className="Product">
                <img src={StarCoffee} alt="Ice Coffee" draggable={false} className='animate-go-up size-[110dvw] lg:size-[45rem] md:size-[85vw] absolute left-1/2 top-1/2 -translate-y-2/3 -translate-x-1/2 md:-translate-y-3/5 lg:-translate-1/2 rotate-15 z-20 select-none' />
                <img src={BgText} alt="Background Text" draggable={false} className="animate-go-scale size-[90dvw] lg:size-[42rem] md:size-[70dvw] absolute top-1/2 left-1/2 -translate-y-2/3 -translate-x-1/2 md:-translate-y-3/5  lg:-translate-1/2 z-0 select-none" />

            </div>
            <div className="left-b-text text-white gap-0 h-auto md:w-2/5 lg:w-3/10 absolute bottom-4 md:bottom-4 lg:bottom-8 md:flex flex-col  left-6 animate-go-right">
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>Starbucks</h1>
                <p className='text-sm font-light leading-[28px]'>A rich, creamy blend of Starbucks® coffee, milk, and ice with mocha sauce, all topped with whipped cream and drizzled with chocolate syrup</p>
            </div>
            <div className="right-b-text hidden md:flex md:w-2/5 lg:w-3/10 absolute bottom-0 md:bottom-4 lg:bottom-8 lg:flex right-6 text-white animate-go-left">
                <p className='text-lg font-light leading-[29px text-right'>globally recognized coffeehouse chain founded in 1971 in Seattle, Washington. Known for its premium coffee. offers a wide range of drinks and snacks, emphasizing quality, sustainability, and community connection.</p>
            </div>
        </section>
    );
}
export default Dashboard;