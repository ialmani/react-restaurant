import { Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import { foods } from "./food";
import Menu from "./Menu";

export default function App() {
  // const  burger = foods[0];
  return (
    <>
      <nav className="bg-cyan-800 font-bold ">
        <ul className=" flex flex-center justify-center p-4 text-white font-mono">
          <li className="p-2 text-white cursor-pointer hover:bg-cyan-600">
            <Link to="/">Home </Link>
          </li>

          <li className="p-2 text-white cursor-pointer hover:bg-cyan-600">
            <Link to="/admin">Admin </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
