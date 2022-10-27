import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import Menu from "./Menu";
import ErrorFallback from "./shared/ErrorFallback";

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
        <Route
          path="/"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Menu />
            </ErrorBoundary>
          }
        />

        <Route
          path="/admin"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Admin />
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  );
}
