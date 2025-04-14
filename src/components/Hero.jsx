import { Link } from "react-router";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="  grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center">
      <div className="">
        <h1 className=" text-6xl max-w-2xl font-bold tracking-tight">
          We’re changing the way people shop
        </h1>
        <p className=" mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem
          non cumque modi blanditiis vero doloremque assumenda fugiat, eaque
          magnam porro dolore optio quisquam, nihil eos corporis dolores aliquid
          recusandae.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary uppercase">
            Our Products
          </Link>
        </div>
      </div>
      <div className=" h-[28rem] carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => (
          <div key={image} className="carousel-item">
            <img src={image} className="object-cover rounded-box" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hero;
