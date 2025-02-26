import { type FC } from "react";

interface ButtonProps {
  label: string;
  wrapperClass?: string;
}

const Button: FC<ButtonProps> = ({ label, wrapperClass }) => (
  <div className={`w-full ${wrapperClass ?? ""}`}>
    <div className="bold-body w-full rounded-[6px] bg-orange py-[10px] text-center text-white">
      {label}
    </div>
  </div>
);

export default Button;
