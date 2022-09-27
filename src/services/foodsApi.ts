import { Food, NewFood } from "../food";

const url = "http://localhost:3001/foods";

export async function getFoods(): Promise<Food[]> {
  const response = await fetch(url);
  return response.json();
}

export async function addFood(food: NewFood): Promise<Food> {
  //accept a new food and give us a food back
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  return response.json();
}
