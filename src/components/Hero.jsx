import React from "react";
import { Link } from "react-router-dom";
import { hero1, hero2, hero3, hero4 } from "../assets/image";

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4];
  return (
    <div className="flex flex-col justify-between gap-x-10 lg:grid-cols-2 lg:pt-8 lg:flex-row px-6 md:px-10">
      <div className="w-full lg:w-[50%]">
        <h2 className="text-4xl md:text-6xl font-semibold lg:leading-18">
          We are changing the way people shop
        </h2>
        <p className="py-15 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
      </div>
      <div className="hidden lg:flex lg:carousel carousel-center bg-base-200 rounded-box max-w-md space-x-4 p-4 relative">
        {images.map((item,inx) => (
          <div key={inx} className="carousel-item">
            <img
              src={item}
              className="rounded-box object-cover w-[350px] h-[450px]"
            />
          </div>
        ))}
      </div>
      <button className="hidden lg:block lg:btn font-normal absolute bottom-[100px] right-[250px] glass text-black ">
        <Link to={"./products"}>OUR PRODUCTS</Link>
      </button>
    </div>
  );
};

export default Hero;
