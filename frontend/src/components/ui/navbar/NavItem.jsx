import React from "react";

const NavItem = ( { icon, label, badge, classname= ""}) => {
    return (
        <button type="button" className="flex items-center gap-2 text-slate-700 transition-colors hover:text-orange-500" >
            {icon && <span className="text-slate-600">{icon}</span>}
            {label && <span className="font-medium">{label}</span>}
            {badge && ( <span className="text-[10px] font-semibold text-orange-600">{badge}</span>)}
        </button>
    )
}

export default NavItem;