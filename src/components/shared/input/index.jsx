import clsx from "clsx";
import { useState } from "react";

export const Input = ({ label, placeholder, onChange, className }) => {
  const [value, setValue] = useState("");
  const onChangeHandler = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className=" mt-6 p-8 bg-[#212529] rounded-[32px]">
      <div>
        <label className=" text-white text-xl">{label}</label>
      </div>
      <textarea
        className={clsx(
          " w-full  bg-transparent border-none outline-none mt-4 text-white placeholder:text-gray resize-none",
          className
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        rows={4}
      />
      <button className=" ml-auto block px-7 py-1.5 bg-[#3d4246] text-white rounded-full">
        Suprise me
      </button>
    </div>
  );
};
