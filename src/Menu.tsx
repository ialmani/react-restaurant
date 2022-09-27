import { useEffect, useState } from "react";
import { Food } from "./food";
import { getFoods } from "./services/foodsApi";
import Heading from "./shared/Heading";

const Menu = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      const foods = await getFoods();
      setFoods(foods);
    }
    fetchFoods();
  }, []);

  return (
    <div className="flex flex-wrap ">
      <Heading level={2} children="Come check us out!"></Heading>
      {foods.map((food) => {
        return (
          <div
            key={food.name}
            className="p-2 shadow-lg border shadow-cyan-500/50 text-center max-w-sm m-7 rounded basis-1/2 cursor-pointer hover:bg-sky-700 hover:text-white"
          >
            <div className="">
              <img
                className="h-52 w-full object-cover"
                src={"./images/" + food.image}
                alt={food.name}
              />
            </div>
            <Heading level={5}>{food.name}</Heading>
            <p>{food.description}</p>
            <p className="p-2 font-bold self-end">${food.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
