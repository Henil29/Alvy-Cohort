import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Row = ({ text, repeat = 12 }) => {
  const items = Array.from({ length: repeat }, () => text);
  return (
    <div className="flex items-center gap-6 whitespace-nowrap">
      {items.map((t, i) => (
        <span
          key={i}
          className="uppercase tracking-[0.2em] text-white/80 font-['font2'] text-lg md:text-xl"
        >
          {t}
        </span>
      ))}
    </div>
  );
};

const Ninth = () => {
  const ref = useRef(null);
  const label = "FOLLOW US ON SOCIAL MEDIA ·";

  // Watch scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start when entering, end when leaving
  });

  // Map vertical scroll (0–1) to horizontal movement (-50% to 50%)
  const x = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <section ref={ref} className="w-full overflow-hidden py-6">
      <motion.div style={{ x }} className="flex">
        <Row text={label} repeat={12} />
        <Row text={label} repeat={12} aria-hidden="true" />
      </motion.div>
    </section>
  );
};

export default Ninth;
