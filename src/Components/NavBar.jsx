import { useState } from "react";
import StarbucksLogo from "../Assets/Starbucks-logo.webp";
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

        <div className={`menu-open bg-dark-green fixed -top-2 -right-2 p-4 pt-24 h-screen w-4/5 border-l border-l-white/50 ${isMenuOpened ? 'flex' : 'hidden'}`}>
          <ul className="text-xl w-full text-center flex flex-col gap-4">
            {listItems.map((item, index) => (
              <>
                <li key={index}><a href={`#${item}`}>{item}</a></li>
                <hr classname={` ${index === 1 ? 'hidden' : 'flex'}`}/>
              </>
            ))}
          </ul>
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
