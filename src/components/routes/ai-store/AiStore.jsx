import { desc } from "motion/react-client";
import { BsInstagram } from "react-icons/bs";
import { BsMagic } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FcLightAtTheEndOfTunnel } from "react-icons/fc";
const AiStore = () => {
  const cards = [
    {
      title: "AI Art",
      description: "Create using stunning tattoos and visualize",
      src: "/images/realistic-portrait.jpg",
      id: 1,
    },
    {
      title: "AI Art",
      description: "Create using stunning tattoos and visualize",
      src: "/images/realistic-portrait.jpg",
      id: 2,
    },
    {
      title: "AI Art",
      description: "Create using stunning tattoos and visualize",
      src: "/images/realistic-portrait.jpg",
      id: 3,
    },
    {
      title: "AI Art",
      description: "Create using stunning tattoos and visualize",
      src: "/images/realistic-portrait.jpg",
      id: 4,
    },
    {
      title: "AI Art",
      description: "Create using stunning tattoos and visualize",
      src: "/images/realistic-portrait.jpg",
      id: 5,
    },
    {
      title: "AI Art",
      description: "Create using stunning tattoos and visualize",
      src: "/images/realistic-portrait.jpg",
      id: 6,
    },
  ];
  return (
    <div
      className=" h-screen overflow-auto w-full px-4 py-6 pb-[134px]"
      style={{
        background: "radial-gradient(at bottom left, #03045e 5% ,#141414 55% )",
      }}
    >
      <div className=" flex justify-between">
        <div className=" text-white flex gap-3 items-center">
          <BsInstagram size={32} />{" "}
          <span className=" text-xl font-medium">AI Art</span>
        </div>
        <div>
          <button className=" bg-white/10 rounded-full px-3  border-[.5px] border-blue-300 py-2.5 uppercase text-white flex items-center justify-center">
            <BsMagic size={20} className=" mr-2" />
            Store+
          </button>
        </div>
      </div>
      <div>
        <div className=" h-[300px] w-full overflow-hidden rounded-3xl mt-5 relative">
          <img
            src="/images/realistic-portrait.jpg"
            alt="xdd"
            className=" h-full w-full object-cover "
          />
          <div className=" absolute top-[20px] left-[20px] px-3 py-2.5 bg-black/50 rounded-full flex items-center gap-2">
            <span className=" px-1 py-1 bg-yellow-300 rounded-full">
              <FaStar className="" size={15} />
            </span>
            <span className=" text-white">New Application</span>
          </div>

          <div className=" absolute bottom-0 h-[120px] bg-black/70 w-full flex items-center justify-center gap-x-4 px-5">
            <div className=" shrink-0">
              <FcLightAtTheEndOfTunnel size={50} />
            </div>
            <div className=" text-white text-xl">
              Get Tattoo AI Now!{" "}
              <p className=" mt-2 text-slate-300 text-sm">
                Create using stunning tattoos and visualize
              </p>
            </div>
            <div>
              <button className="bg-gradient-to-t from-sky-500 to-indigo-600 text-lg px-6 py-1.5 text-white rounded-full">
                Try
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-6">
        <div className=" text-white text-lg">All tools</div>
        {cards.map((card) => (
          <div key={card.id} className=" flex items-center gap-x-4 mt-4">
            <div className=" h-[60px] w-[60px] rounded-xl overflow-hidden">
              <img src={card.src} alt={card.title} />
            </div>
            <div className=" text-white">
              <div>{card.title}</div>
              <div className=" text-slate-500 mt-2">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiStore;
