import clsx from "clsx";
import { useState } from "react";

export const CarouselMobile = ({ handlePlay }) => {
  const [selected, setSelected] = useState(0);
  const list = [
    {
      type: "realistic-portrait",
      image: "/images/realistic-portrait.jpg",
      title: "Realistic Portrait",
    },
    {
      type: "no-style",
      image: "/images/realistic-portrait.jpg",
      title: "No Style",
    },
    {
      type: "abstract",
      image: "/images/realistic-portrait.jpg",
      title: "Abstract",
    },
    {
      type: "photo-realistic",
      image: "/images/realistic-portrait.jpg",
      title: "Photo Realistic",
    },
  ];
  return (
    <div className=" mt-5">
      <div className=" flex items-center justify-between">
        <div className=" text-white text-lg font-semibold">
          Select Style
          <span className=" text-slate-600 font-normal"> (Optional)</span>
        </div>
        <div>
          <button className=" bg-[#3d4246] px-6 p-1 rounded-full text-slate-300">
            Advance
          </button>
        </div>
      </div>

      <div>
        <div className=" mt-4 overflow-x-auto no-scrollbar overflow-y-visible">
          <div className=" inline-flex gap-4">
            {list.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "gap-x-5 flex flex-col items-center gap-1 shrink-0 mt-4 ml-2 last:pr-2"
                )}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={clsx("  w-[100px] h-[100px]  rounded-3xl", {
                    " outline outline-lime-400 outline-2 outline-offset-4":
                      selected === index,
                  })}
                />
                <div
                  className={clsx(
                    " text-slate-600 text-center text-[14px] mt-2",
                    { "text-white": selected === index }
                  )}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" bottom-[150px] w-[90%]  mt-[80px] mx-auto">
          <button
            className="relative mt-auto block w-full py-5 uppercase bg-blue-800 text-white rounded-full overflow-hidden "
            onClick={(e) => {
              e.target.classList.add("btn-shine");
              setTimeout(() => {
                e.target.classList.remove("btn-shine");
                handlePlay();
              }, 1000);
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
