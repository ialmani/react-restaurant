import Input from "./shared/Input";
import Heading from "./shared/Heading";
import Button from "./shared/Button";
import CheckboxList from "./shared/CheckboxList";
import { Food, foodTags, NewFood } from "./food";
import Checkbox from "./shared/Checkbox";
import React, { useEffect, useState } from "react";
import { addFood } from "./services/foodsApi";
import toast from "react-hot-toast";

const emptyFood: NewFood = {
  name: "",
  image: "",
  price: 0,
  description: "",
  tags: [],
};

export type Errors = {
  name?: string;
  image?: string;
  price?: string;
  description?: string;
  tags?: string;
};

const Admin = () => {
  const [food, setFood] = useState(emptyFood);
  const [errors, setErrors] = useState<Errors>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    //currentFood-prevFood: react injects the current state value when a function is passed to setState
    setFood((currentFood) => ({ ...currentFood, [id]: value })); //computed property syntax - [id]: value = change a property using a string as id
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!food.name) {
      newErrors.name = "Name is required";
    }
    if (!food.image) {
      newErrors.image = "Image is required";
    }
    if (!food.price) {
      newErrors.price = "Price is required";
    }
    if (!food.description) {
      newErrors.description = "Description is required";
    }
    if (food.tags.length === 0) {
      newErrors.tags = "At least one tag is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    await addFood(food);
    toast.success("Food Added!");
    setFood(emptyFood);
  };

  return (
    <>
      <div className="">
        <Heading level={2} children="Login"></Heading>

        <form onSubmit={handleSubmit} className="flex flex-col mt-5 max-w-sm">
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
