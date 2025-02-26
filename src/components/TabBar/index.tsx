import Image from "next/image";
import Link from "next/link";

const TabBar = () => (
  <footer className="flex w-full flex-row border-t border-t-[#E4E4E4] bg-white">
    <Link href="#" className="flex w-full flex-col items-center gap-[7px] py-3">
      <Image
        src="search.svg"
        width={19}
        height={19}
        alt="search"
        className="h-[19px]"
      />
      <span className="text-[12px] leading-[12px]">Otsing</span>
    </Link>
    <Link href="#" className="flex w-full flex-col items-center gap-[7px] py-3">
      <Image
        src="heart.svg"
        width={19}
        height={19}
        alt="favourite"
        className="h-[19px]"
      />
      <span className="text-[12px] leading-[12px]">Lemmikud</span>
    </Link>
    <Link href="#" className="flex w-full flex-col items-center gap-[7px] py-3">
      <Image
        src="file.svg"
        width={19}
        height={19}
        alt="representation"
        className="h-[19px]"
      />
      <span className="text-[12px] leading-[12px]">Esindused</span>
    </Link>
    <Link
      href="/profile"
      className="flex w-full flex-col items-center gap-[7px] py-3"
    >
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
