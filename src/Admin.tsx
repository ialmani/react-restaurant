import Input from "./shared/Input";
import Heading from "./shared/Heading";
import Button from "./shared/Button";
import CheckboxList from "./shared/CheckboxList";
import { Food, foodTags } from "./food";
import Checkbox from "./shared/Checkbox";
import React, { useEffect, useState } from "react";

const emptyFood: Food = {
  name: "",
  image: "",
  price: 0,
  description: "",
  tags: [],
};

const Admin = () => {
  const [food, setFood] = useState(emptyFood);
  // const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    //currentFood-prevFood: react injects the current state value when a function is passed to setState
    setFood((currentFood) => ({ ...currentFood, [id]: value })); //computed property syntax - [id]: value = change a property using a string as id
  };
  // debugger;

  return (
    <>
      <div className="">
        <Heading level={2} children="Login"></Heading>

        <form className="flex flex-col mt-5 max-w-sm">
          <Input
            type="text"
            id="name"
            label="Name"
            value={food.name}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            id="description"
            label="Description"
            value={food.description}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            id="price"
            label="Price"
            onChange={handleInputChange}
            value={food.price.toString()}
          />
          <Input
            id="image"
            label="Image filename"
            onChange={handleInputChange}
            value={food.image}
          />
          <CheckboxList label="Tags">
            {foodTags.map((tag) => (
              <Checkbox
                key={tag}
                id={tag}
                label={tag}
                checked={food.tags.includes(tag)}
                onChange={(e) => {
                  // if (isChecked === true) {
                  //   setFood({ ...food, [e.target.name]: "" });
                  // } else {
                  //   setFood({ ...food, [e.target.id]: e.target.value });
                  // }
                  setFood((currentFood) => {
                    const { checked } = e.target;
                    const tags = checked
                      ? [...currentFood.tags, tag]
                      : currentFood.tags.filter((t) => t !== tag);
                    return { ...currentFood, tags };
                  });
                }}
              />
            ))}
          </CheckboxList>

          <Button
            variant="primary"
            type="submit"
            children="Save"
            classname="mt-10 ml-3"
          ></Button>
        </form>
      </div>
    </>
  );
};

export default Admin;
