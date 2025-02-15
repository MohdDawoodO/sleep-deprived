import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="min-h-[10vh] px-16 font-semibold flex items-center">
      <h1 className="text-2xl">
        <Link to={"/"}>Sleep Deprivation</Link>
      </h1>
    </nav>
  );
}
