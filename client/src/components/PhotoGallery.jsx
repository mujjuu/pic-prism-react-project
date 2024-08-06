import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import ImageCard from "./ImageCard";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>

      {/* All my photos will be listed inside this div  */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20 ">
        {/* Image card */}

        <ImageCard
          title="The Mountain"
          author="muzzley"
          img="/naturephoto.jpg"
          price={10}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="Himalaya"
          author="Basheer"
          img="/naturephoto.jpg"
          price={550}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="Himalaya"
          author="Basheer"
          img="/naturephoto.jpg"
          price={550}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="Himalaya"
          author="Basheer"
          img="/naturephoto.jpg"
          price={550}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="Himalaya"
          author="Basheer"
          img="/naturephoto.jpg"
          price={550}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="Himalaya"
          author="Basheer"
          img="/naturephoto.jpg"
          price={550}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="Himalaya"
          author="Basheer"
          img="/naturephoto.jpg"
          price={550}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
     
      </div>
    </div>
  );
};

export default PhotoGallery;
