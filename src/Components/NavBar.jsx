import { useState } from "react";
import StarbucksLogo from "../assets/Starbucks-logo.webp";
import MenuIcon from '../assets/Menu.svg'

const NavBar = () => {

  const listItems = ['Overview', 'Coffee', 'Costumization', 'Seasonable']
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  console.log(isMenuOpened)

  return (
    <nav className="navBar absolute top-2 md:top-0 left-2 lg:left-[5%] w-[96%] lg:w-[90%] mx-auto mt-2 h-[8vh] flex items-center justify-between text-white z-40 animate-go-down ">
      <img
        src={StarbucksLogo}
        draggable={false}
        alt="StarbucksLogo"
        className="size-16 md:size-18 select-none"
      />

        <div className={`menu-open bg-dark-green flex md:hidden flex-col items-center fixed -top-4 -right-2 p-4 pt-24 h-[110dvh] w-4/5 border-l border-l-white/50 transition-all duration-300 ${isMenuOpened ? 'translate-x-0 ' : 'translate-x-full'}`}>
          <ul className="text-xl w-full text-center flex flex-col gap-2">
            {listItems.map((item, index) => (
              <>
                <li className="active:bg-dark-green brightness-110 rounded-lg py-2" key={index}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
                {console.log(index)}
              </>
            ))}
          </ul>
        <button className="relative  bg-dark-green brightness-110 scale-110 mt-16 px-4 py-2 rounded-lg font-medium active:brightness-90 transition-all duration-150">Order Now</button>
        </div>

      <ul className="hidden md:flex items-center gap-8 font-[400] text-[1rem] z-50">
        {
          listItems.map((item, index) => (

            <li key={index} className="hover:opacity-70 transition-all duration-100"><a href="#">{item}</a></li>
          ))
          }
      </ul>
      <img src={MenuIcon} onClick={() => setIsMenuOpened(!isMenuOpened)} alt="Hamburger menu" className="size-14 z-50 flex md:hidden p-2 rounded-3xl active:bg-black/20 transition-all duration-200 select-none" draggable='false'/>
      <button className="hidden md:flex bg-dark-green px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium hover:brightness-90 active:brightness-80 transition-all duration-150">Order Now</button>
    </nav>
  );
};

export default NavBar;
