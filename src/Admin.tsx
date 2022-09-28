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

export type Touched = {
  name?: boolean;
  image?: boolean;
  price?: boolean;
  description?: boolean;
  tags?: boolean;
};

type FormStatus = "idle" | "submitting" | "submitted" | "error";

const Admin = () => {
  const [food, setFood] = useState(emptyFood);
  const [touched, setTouched] = useState<Touched>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = () => {
    const newErrors: Errors = {};
    if (!food.name) {
      newErrors.name = "Name is required";
    }
    if (!food.image) {
      newErrors.image = "Image filename is required";
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

    return newErrors;
  };
  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    //currentFood-prevFood: react injects the current state value when a function is passed to setState
    setFood((currentFood) => ({ ...currentFood, [id]: value })); //computed property syntax - [id]: value = change a property using a string as id
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setTouched((currentTouched) => ({ ...currentTouched, [id]: true }));
  };

  const handleError = (id: keyof Errors) => {
    return status === "submitted" || touched[id] ? errors[id] : "";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.scroll(0, 0);
    setStatus("submitting");
    if (!isValid) {
      setStatus("submitted");
      return;
    }
    await addFood(food);
    toast.success("Food Added!");
    setStatus("idle");
    setFood(emptyFood);
    setTouched({});
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
            error={handleError("name")}
            onBlur={handleBlur}
          />
          <Input
            type="text"
            id="description"
            label="Description"
            value={food.description}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={handleError("description")}
          />
          <Input
            type="number"
            id="price"
            label="Price"
            onChange={handleInputChange}
            value={food.price.toString()}
            onBlur={handleBlur}
            error={handleError("price")}
          />
          <Input
            id="image"
            label="Image filename"
            onChange={handleInputChange}
            value={food.image}
            error={handleError("image")}
            onBlur={handleBlur}
          />
          <CheckboxList label="Tags" error={handleError("tags")}>
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
