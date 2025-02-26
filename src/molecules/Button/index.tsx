import { type FC } from "react";

interface ButtonProps {
  label: string;
  wrapperClass?: string;
}

const Button: FC<ButtonProps> = ({ label, wrapperClass }) => (
  <div
    className={`bold-body bg-orange w-full rounded-[6px] py-[10px] text-center text-white ${wrapperClass ?? ""}`}
  >
    {label}
  </div>
);

export default Button;
