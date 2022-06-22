import { useGlobalStore } from "libs/store/global";

export default function Header() {
  const [showMenuMobile, setShowMenuMobile] = useGlobalStore(state => [state.showMenuMobile, state.setShowMenuMobile]);

  return (
    <header className="bg-white px-6 py-4 flex justify-between items-center gap-4">
      <div className="flex gap-4 lg:hidden">
        <button onClick={() => setShowMenuMobile(!showMenuMobile)}>
          <i className="fas fa-bars text-xl" />
        </button>
        <img className="h-10" src="./assets/images/logo_gadjian.png" alt="" />
      </div>
      <div className="w-max ml-auto text-lg font-semibold block">
        Hallo,
        <span className="ml-1">User</span>
      </div>
      <button className="w-12 rounded-full overflow-hidden">
        <img src="https://ui-avatars.com/api/?name=User" alt="" />
      </button>
    </header>
  )
}