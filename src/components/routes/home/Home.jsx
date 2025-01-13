import { BsInstagram } from "react-icons/bs";
import { Input } from "../../shared/input";
import { CarouselMobile } from "../../shared/carousel-mobile";

const Home = () => {
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
        <CarouselMobile />
      </div>
    </div>
  );
};

export default Home;
