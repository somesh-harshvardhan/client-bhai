import { BsInstagram } from "react-icons/bs";
import { Input } from "../../shared/input";
import { CarouselMobile } from "../../shared/carousel-mobile";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlRefresh } from "react-icons/sl";
const CreatedArt = ({ handlePlay }) => {
  const images = [
    {
      src: "/images/realistic-portrait.jpg",
      id: 1,
      name: "image 1",
    },
    {
      src: "/images/realistic-portrait.jpg",
      id: 2,
      name: "image 2",
    },
    {
      src: "/images/realistic-portrait.jpg",
      id: 3,
      name: "image 3",
    },
    {
      src: "/images/realistic-portrait.jpg",
      id: 4,
      name: "image 4",
    },
  ];
  return (
    <div
      className=" fixed z-50 w-screen h-screen  top-0 left-0 p-4 "
      style={{
        background: "radial-gradient(at bottom left, #03045e 5% ,#141414 55% )",
      }}
    >
      <div className=" flex items-center mt-4">
        <div
          className=" p-2 rounded-full bg-white/15 text-white"
          onClick={handlePlay}
        >
          <IoClose size={30} />
        </div>
        <div className=" text-white text-2xl mx-auto">Result</div>
      </div>
      <div className=" grid grid-cols-2 gap-x-2 gap-y-1 mt-4">
        {images.map((img) => (
          <div key={img.id} className=" relative">
            <img src={img.src} alt={img.name} className=" rounded-3xl" />
            <div className=" p-1.5 bg-black/50 bottom-2 right-2 absolute text-white rounded-full">
              <IoIosArrowRoundForward size={30} />
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-10 bg-white/15 rounded-full w-full">
        <div className=" w-full h-full bg-black/35 px-4 py-3 flex items-center gap-x-4">
          <label className=" text-slate-600 flex items-center justify-between gap-x-5">
            Promt{" "}
            <span className=" bg-white/35 h-1.5 w-1.5 rounded-full block" />
          </label>
          <div className=" w-full">
            <select className="w-full bg-transparent border-none outline-none text-white flex-1">
              <option value="boy-playing-soccer">
                Boy playing with a soccer ball
              </option>
              <option value="girl-playing-piano">Girl playing the piano</option>
              <option value="dog-running-park">Dog running in the park</option>
              <option value="cat-sleeping-sun">Cat sleeping in the sun</option>
            </select>
          </div>
        </div>
      </div>

      <div className=" mt-4 ">
        <div className=" text-white mt-[60px] text-6xl flex items-center">
          <span className=" text-[#0077b6]">D</span>{" "}
          <span className="loading-bar" /> one
        </div>
      </div>

      <div className=" flex items-center justify-between mt-6">
        <div className=" text-white opacity-80">
          <span className=" opacity-50 font-semibold">Select</span> or{" "}
          <span className=" opacity-70 font-semibold">Regenerate</span>
          <br />
          <span>new images</span>
        </div>
        <div className=" bg-blue-500 p-4 rounded-full text-white">
          <SlRefresh size={25} />
        </div>
      </div>
    </div>
  );
};
const CreatingArt = ({ handlePlay }) => {
  const ref = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      ref.current.classList.add("active");
      ref.current.querySelector(".overlay-inner").classList.add("active");
      setTimeout(() => {
        handlePlay();
      }, 2000);
    }, 3000);
  }, []);
  return (
    <div
      className=" fixed z-50 w-screen h-screen flex items-center justify-center bg-black top-0 left-0 "
      style={{
        background: "radial-gradient(at bottom left, #03045e 5% ,#141414 55% )",
      }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          perspective: "1500px",
          perspectiveOrigin: "top",
        }}
      >
        <div
          ref={ref}
          className=" h-[200px] w-[200px] border border-white/25 rounded-full overlay-card transition-all duration-[1000ms] delay-[200ms] flex items-center justify-center"
        >
          <div className=" h-[180px] w-[180px] rounded-full transition-all duration-[500ms] overlay-inner relative">
            <img
              src="/images/realistic-portrait.jpg"
              className=" rounded-full w-full h-full"
            />
            <div className=" absolute top-0 left-0 rounded-full bg-black/45 z-50 w-full h-full" />
            <div className="absolute top-0 left-0 rounded-full  z-50 w-full h-full flex items-center justify-center">
              <FaCheck className=" text-white" size={40} />
            </div>
          </div>
        </div>
        <div className=" text-4xl text-white mt-[60px] flex items-center justify-center">
          <span className=" text-[#0077b6]">Cr</span>{" "}
          <span className=" loading-bar" /> eating
        </div>
      </div>
    </div>
  );
};
const states = {
  1: "1",
  2: "2",
  3: "3",
};
const Home = () => {
  const [play, setPlay] = useState(states[1]);
  const handlePlay = (state) => {
    setPlay(state);
  };
  return (
    <div
      className=" h-full w-full px-4 py-6"
      style={{
        background: "radial-gradient(at bottom left, #03045e 5% ,#141414 55% )",
      }}
    >
      <div>
        <div className=" text-white flex gap-3 items-center">
          <BsInstagram size={32} />{" "}
          <span className=" text-xl font-medium">AI Art</span>
        </div>
      </div>

      <div>
        <Input
          label={"Type your idea"}
          placeholder={
            "Describe in detail what you want to see in your artwork"
          }
        />
      </div>

      <div>
        <CarouselMobile handlePlay={() => handlePlay(states[2])} />
      </div>
      {play === states[2] && (
        <CreatingArt handlePlay={() => handlePlay(states[3])} />
      )}
      {play === states[3] && (
        <CreatedArt handlePlay={() => handlePlay(states[1])} />
      )}
    </div>
  );
};

export default Home;
