import { motion } from "motion/react";
import { waveAnim } from "../animations";

export default function Wave() {
  return (
    // <svg
    //   width="1920"
    //   height="298"
    //   viewBox="0 0 1920 298"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="absolute top-[50%] left-0 translate-y-[-50%] z-[-10]"
    // >
    //   <motion.path
    //     variants={waveAnim}
    //     initial="initial"
    //     animate="animate"
    //     id="wave"
    //     d="M0 95.869C0 95.869 238.817 293 478.747 293C799.174 293 925.764 4.99997 1233.05 5C1540.34 5.00003 1728.5 74.8873 1920 169.359"
    //     stroke="#BF91BE"
    //     stroke-width="10"
    //     stroke-linecap="round"
    //   />
    // </svg>
    <svg
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-[50%] left-0 translate-y-[-50%] z-[-10] w-full"
    >
      <motion.path
        variants={waveAnim}
        initial="initial"
        animate="animate"
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#BF91BE"
        strokeOpacity="0.25"
        strokeWidth="10"
      />
    </svg>
  );
}
