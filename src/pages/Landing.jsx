import { hero1, hero2, hero3, hero4 } from "../assets/image";

const Landing = () => {
  const images = [hero1, hero2, hero3, hero4];
  return (
    <div className="flex flex-col gap-5 lg:grid-cols-2 lg:pt-8 lg:flex-row px-6 md:px-10">
      <div className="w-full lg:w-[50%]">
        <h2 className="text-4xl md:text-6xl font-semibold">
          We are changing the way people shop
        </h2>
        <p className="py-10 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <button className="btn btn-primary">OUR PRODUCTS</button>
      </div>
      <div className="hidden lg:flex lg:carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
        {images.map((item) => (
          <div className="carousel-item">
            <img
              src={item}
              className="rounded-box object-cover w-[350px] h-[450px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
