import StarbucksLogo from "../Assets/Starbucks-logo.webp";

const NavBar = () => {
  return (
    <nav className="navBar absolute top-2 md:top-0 left-2 lg:left-[5%] w-[96%] lg:w-[90%] mx-auto mt-2 h-[8vh] flex items-center justify-between text-white z-40 animate-go-down ">
      <img
        src={StarbucksLogo}
        draggable={false}
        alt="StarbucksLogo"
        className="size-16 md:size-18 select-none"
      />
      <ul className="hidden md:flex items-center gap-8 font-[400] text-[1rem] z-50">
        <li className="hover:opacity-70 transition-all duration-100"><a href="#">Overview</a></li>
        <li className="hover:opacity-70 transition-all duration-100"><a href="#">Coffee</a></li>
        <li className="hover:opacity-70 transition-all duration-100"><a href="#">Customization</a></li>
        <li className="hover:opacity-70 transition-all duration-100"><a href="#">Seasonable</a></li>
      </ul>
      <button className="bg-dark-green px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium hover:brightness-90 active:brightness-80 transition-all duration-150">Order Now</button>
    </nav>
  );
};

export default NavBar;
