import React from "react";
import ChevronDownIcon from "../../../assets/icons/navbar/ChevronDownIcon.jsx";
import NavItem from "./NavItem";
import SearchIcon from "../../../assets/icons/navbar/SearchIcon.jsx";
import OffersIcon from "../../../assets/icons/navbar/offericon.jsx";
import HelpIcon from "../../../assets/icons/navbar/HelpIcon.jsx";
import UserIcon from "../../../assets/icons/navbar/UserIcon.jsx";
import CartIcon from "../../../assets/icons/navbar/CartIcon.jsx";
import MenuIcon from "../../../assets/icons/navbar/MenuIcon.jsx";
import CorporateIcon from "../../../assets/icons/navbar/CorporateIcon.jsx";
const Navbar = () => {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:h-20 lg:py-0">

        {/* Left section */}
        <div className="flex min-w-0 flex-1 items-center gap-11 sm:gap-10  ">
          <div className=" grid h-11 w-11 place-items-center rounded-2xl bg-orange-500 sm:h-12 sm:w-12 cursor-pointer hover:h-12 ">
            <span className="text-xl font-black text-white sm:text-2xl  ">
              S
            </span>
          </div>


          <button type="button" className="flex min-w-0 items-center gap-2 text-slate-700 hover:text-orange-500 " >
            <span className="whitespace-nowrap border-b-2 border-slate-800 pb-0.5 font-semibold"> Other</span>
            <span className="hidden truncate text-sm text-slate-500 sm:inline">Phase 11, Sector 65, Sahibzada Ajit S...</span>
            <ChevronDownIcon className="h-4 w-4 text-orange-600" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex ">
          <NavItem icon={<CorporateIcon />} label="Swiggy Corporate" />
          <NavItem icon={<SearchIcon />} label="Search" />
          <NavItem icon={<OffersIcon />} label="Offers" badge="NEW" />
          <NavItem icon={<HelpIcon />} label="Help" />
          <NavItem icon={<UserIcon />} label="Sign In" />


          <button type="button" className="flex items-center gap-2 font-medium text-slate-700  hover:text-orange-500">
            <span className="relative"> <CartIcon />
              <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-md border border-slate-900 bg-white text-xs font-semibold"> 0 </span>
            </span>
            <span>Cart</span>
          </button>
        </nav>


        {/* Mobile Section  */}
        <div className="flex items-center gap-3 lg:hidden">
          <NavItem classname="gap-1" icon={<SearchIcon />} label="Search" />
          <button type="button" className="relative flex items-center justify-center"><CartIcon className="h-6 w-6" /> <span className="absolute -right-2 -top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-semibold text-white"></span> 0 </button>
          <button type="button" aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900" > <MenuIcon /> </button>
        </div>


      </div>
    </header>
  )
}

export default Navbar;