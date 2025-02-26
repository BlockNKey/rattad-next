import Image from "next/image";
import Link from "next/link";

const TabBar = () => (
  <footer className="fixed bottom-0 left-0 flex w-full flex-row justify-between border-t border-t-[#E4E4E4] bg-white p-[30px] pt-[14px]">
    <div className="flex flex-col items-center gap-[7px]">
      <Image
        src="search.svg"
        width={19}
        height={19}
        alt="search"
        className="h-[19px]"
      />
      <span className="text-[12px] leading-[12px]">Otsing</span>
    </div>
    <div className="flex flex-col items-center gap-[7px]">
      <Image
        src="heart.svg"
        width={19}
        height={19}
        alt="favourite"
        className="h-[19px]"
      />
      <span className="text-[12px] leading-[12px]">Lemmikud</span>
    </div>
    <div className="flex flex-col items-center gap-[7px]">
      <Image
        src="file.svg"
        width={19}
        height={19}
        alt="representation"
        className="h-[19px]"
      />
      <span className="text-[12px] leading-[12px]">Esindused</span>
    </div>
    <Link href="/profile" className="flex flex-col items-center gap-[7px]">
      <Image
        src="user.svg"
        width={19}
        height={19}
        alt="profile"
        className="h-[19px]"
      />
      <span className="text-[12px] leading-[12px]">Profiil</span>
    </Link>
  </footer>
);

export default TabBar;
