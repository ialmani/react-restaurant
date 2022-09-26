import { foods } from "./food";

export default function App() {
  // const  burger = foods[0];
  return (
    <>
      <h1 className="text-3xl font-bold text-center">React Restaurant</h1>
      <div className="flex flex-wrap ">
        {foods.map((food) => {
          return (
            <div className="p-2 shadow-lg border shadow-cyan-500/50 text-center max-w-sm m-7 rounded basis-1/2 cursor-pointer hover:bg-sky-700 hover:text-white">
              <div className="">
                <img
                  className="h-52 w-full"
                  src={"./images/" + food.image}
                  alt={food.name}
                />
              </div>
              <h2 className="p-4 font-bold">{food.name}</h2>
              <p>{food.description}</p>
              <p className="p-2 font-bold self-end">${food.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
