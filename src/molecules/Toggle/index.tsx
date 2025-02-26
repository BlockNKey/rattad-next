"use client";
import { useState } from "react";

import "./style.css";

const Toggle = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`relative h-[31px] w-[51px] rounded-[100px] px-[2px] py-[1px] outline-none ${active ? "bg-orange border-orange" : "bg-gray border border-[#E7E7E7]"}`}
      onClick={() => setActive(!active)}
    >
      <div
        className={`toggle-shadow size-[27px] rounded-full bg-white transition-all duration-200 ${active ? "translate-x-5" : ""}`}
      ></div>
    </button>
  );
};

export default Toggle;
