import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import wagyu from "../assets/wagyu1.png";
import steak from "../assets/steakaupoivrenew.webp";
import profiteroles from "../assets/profiteroles1.png";
import escargot from "../assets/escargot2.png";
import poisson from "../assets/poisson.png";

const Carousel = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid red",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: wagyu,
    title: "Wagyu",
    id: 1,
  },
  {
    url: steak,
    title: "Steak",
    id: 2,
  },
  {
    url: profiteroles,
    title: "Profiteroles",
    id: 3,
  },
  {
    url: escargot,
    title: "Escargot",
    id: 4,
  },
  {
    url: poisson,
    title: "Poisson",
    id: 5,
  },
];
