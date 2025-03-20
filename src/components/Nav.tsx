import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { fadeAnim, navAnim } from "../animations";
import { useEffect, useState } from "react";

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loc, setLoc]: any = useState({ id: "", land: false });

  function previewFn() {
    window.open(`/#/preview/${loc.id}`);
  }

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
      className="min-h-[10vh] px-24 py-4 md:mb-0 mb-16 font-semibold flex items-center justify-between"
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
          <motion.button
            variants={fadeAnim}
            exit={fadeAnim.exit}
            onClick={() => (loc.id ? previewFn() : navigate("/home"))}
            className="test-button px-6 py-2 border-2 text-[#05da76] border-[#05da76] hover:bg-[#05da76] hover:text-white duration-500"
          >
            {loc.id ? "Test" : "Start"}
          </motion.button>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
