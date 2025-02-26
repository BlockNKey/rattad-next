import { type FC } from "react";
import Image from "next/image";

interface MenuItemProps {
  title: string;
  special?: boolean;
  type?: string;
  wrapperClass?: string;
}

const MenuItem: FC<MenuItemProps> = ({
  title,
  special,
  type,
  wrapperClass,
}) => (
  <div className={`flex flex-row justify-between ${wrapperClass ?? ""}`}>
    <div className="flex flex-row items-center justify-center gap-[11px]">
      <Image src="heart.svg" width={18} height={16} alt="heart" />
      <span>{title}</span>
    </div>
    {!special ? (
      <Image
        src="chevron_right.svg"
        width={7}
        height={12}
        alt="sun"
        className="h-[12px]"
      />
    ) : (
      <div className="flex flex-row gap-[7px]">
        <Image src="sun.svg" width={15} height={15} alt="sun" />
        <span>{type}</span>
      </div>
    )}
  </div>
);

export default MenuItem;
