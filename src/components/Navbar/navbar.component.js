import React from "react" ;

import {BiChevronRight, BiSearch , BiChevronDown,BiMenu} from "react-icons/bi";

const NavSm = () => {


  return (
    <>
    <div className="text-white flex items-center justify-between">
    <div>
      <h3 className="text-xl font-bold">IT ALL STARTS HERE!!!</h3>
      <span className="text-gray-400 text-xs flex items-center">
      Bhubaneshwar <BiChevronRight />
      </span>
    </div>
    <div className="w-8 h-8">
    <BiSearch className="w-full h-full"/>
    </div>
    </div>
    </>
  )
};
const NavMd = () => {
return(
  <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
 <BiSearch />
 <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
</div>

)

};
const NavLg = () => {
  return(
<>
<div className="container mx-auto px-4 flex items-center justify-between">
   <div className="flex items-center w-1/2 gap-3 ">
      <div className="w-12 h-12 ">
         <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />
      </div>
      <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
         <BiSearch />
         <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
      </div>
   </div>
   <div className="flex items-center gap-3">
   <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
   Bhubaneshwar <BiChevronDown />
   </span>
   <button className="bg-red-600 text-sm rounded px-2 py-1">
   sign in
   </button>
   <div className="w-8 h-8 text-white">
   <BiMenu className="w-full h-full" />
   </div>
   </div>
</div>
</>
)


};


const Navbar = () => {

  return (
    <>
    <nav className="bg-navCol-900 px-4 py-2">
    <div className ="md:hidden">{
      /*mobile*/
      <NavSm />
    }</div>
    <div className ="hidden lg:hidden md:flex">{
      /*tablet*/
      <NavMd />
    }</div>
    <div className ="hidden lg:flex">{
      /*desktop */
      <NavLg />
    }</div>
    </nav>
    </>
  )
};

export default Navbar;
