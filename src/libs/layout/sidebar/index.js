import { NavLink } from "react-router-dom";
import { useOutsideClick } from "libs/helpers/outsideClick";
import { useRef } from "react";
import { useGlobalStore } from "libs/store/global";

export default function Sidebar() {
  const [showMenuMobile, setShowMenuMobile] = useGlobalStore(state => [state.showMenuMobile, state.setShowMenuMobile]);

  const ref = useRef();

  useOutsideClick(ref, () => setShowMenuMobile(false))

  return (
    <aside ref={ref} className={`bg-white w-[280px] h-screen p-8 absolute lg:relative top-0 left-0 transition lg:translate-x-0 z-10
    ${!showMenuMobile ? '-translate-x-full' : 'shadow-lg lg:shadow-none'}
    `}>
      <nav>
        <ul className="font-bold space-y-4">
          <li>
            <NavLink to="/list" className={({ isActive }) => isActive ? 'text-gray-500' : ''}>
              <i className="fas fa-list w-5 text-center"/> List
            </NavLink>
          </li>
          <li>
            <NavLink to="/form" className={({ isActive }) => isActive ? 'text-gray-500' : ''}>
            <i className="fas fa-rectangle-list w-5 text-center"/> Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}