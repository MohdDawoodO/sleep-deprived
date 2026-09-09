import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { fadeAnim, navAnim } from "../animations";
import { useEffect, useState } from "react";

export default function Nav() {
  const location = useLocation();
  const [loc, setLoc]: any = useState({ id: "", land: false });

  const MotionLink = motion(Link)

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    const land = location.pathname.split("/")[1] === "";

    setLoc({ land, id });
  }, [location.pathname]);

  return (
    <motion.nav
      variants={navAnim}
      initial="initial"
      animate="animate"
      className="mb-16 flex min-h-[10vh] items-center justify-between px-24 py-4 font-semibold md:mb-0"
    >
      <h1 className="text-2xl">
        <Link
          onClick={() => (document.body.style.overflow = "hidden")}
          to={loc.id ? "/home" : "/"}
        >
          Sleep Deprived
        </Link>
      </h1>

      <AnimatePresence>
        {(loc.land || loc.id) && (
          <MotionLink
            variants={fadeAnim(0.3)}
            exit={fadeAnim(0.3).exit}
            to={loc.id ? `/preview/${loc.id}` : "/home"}
            target='_blank'
            className="border-2 border-[#05da76] px-6 py-2 text-[#05da76] duration-500 hover:bg-[#05da76] hover:text-white"
          >
            {loc.id ? "Test" : "Start"}
          </MotionLink>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
