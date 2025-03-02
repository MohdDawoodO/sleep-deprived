import { Link, useLocation} from "react-router-dom";
import { motion } from 'motion/react'
import { navAnim } from "../animations";
import { useEffect, useState } from "react";

export default function Nav() {
  const location = useLocation()

  const [id, setId]:any = useState()
  
  function previewFn(){
    window.open(`/preview/${id}`)
  }

  useEffect(()=>{
    const currentId = location.pathname.split('/')[2]
    setId(currentId)

  }, [location.pathname])
  
  return (
    <motion.nav initial={navAnim.intital} animate={navAnim.animate} className="min-h-[10vh] px-16 font-semibold flex items-center justify-between">
      <h1 className="text-2xl">
        <Link to={"/"}>Sleep Deprived</Link>
      </h1>
      {id && <button
        onClick={previewFn}
        className="test-button px-6 py-2 border-2 text-[#05da76] border-[#05da76] hover:bg-[#05da76] hover:text-white duration-500 absolute top-0 left-full translate-x-[-200%] translate-y-[75%] "
      >
        Test
      </button>}
      
    </motion.nav>
  );
}
