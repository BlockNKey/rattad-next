import Image from "next/image";
import Link from "next/link";

const AppBar = () => (
  <nav className="flex flex-row justify-between bg-white p-5 pt-[55px]">
    <Link
      href="/"
      className="flex flex-row items-center justify-center gap-[7.75px]"
    >
      <Image src="logo.svg" width={37} height={30} alt="Rattad" />
      <span className="text-[28px] font-semibold leading-[32px] tracking-[-1.88px]">
        Rattad24
      </span>
    </Link>
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-row gap-[7px]">
        <Image src="send.svg" width={14} height={14} alt="location" />
        <span>Eesti</span>
      </div>
      <div className="pl-[17px]">
        <Image src="web.svg" width={18} height={18} alt="globe" />
      </div>
      <div className="relative pl-[16px]">
        <Image src="alarm.svg" width={16} height={18} alt="notification" />
        <div className="absolute right-[-5px] top-[-5px] flex size-[14px] items-center justify-center rounded-full border-[1.25px] border-white bg-[#E53000] text-[8px] font-semibold leading-[8px] text-white">
          1
        </div>
      </div>
    </div>
  </nav>
);

export default AppBar;
