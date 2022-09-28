import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render children", () => {
    const { getByRole } = render(
      <Button type="button" variant="primary">
        Click me
      </Button>
    );
    getByRole("button", { name: "Click me" });
  });

  it("should set a custom css class", () => {
    const { getByRole } = render(
      <Button type="button" variant="primary" classname="my-class">
        Click me
      </Button>
    );
    expect(getByRole("button", { name: "Click me" })).toHaveClass("my-class");
  });

  it("should apply the button type prop", () => {
    const { getByRole } = render(
      <Button type="submit" variant="primary">
        Click me
      </Button>
    );
    expect(getByRole("button", { name: "Click me" })).toHaveAttribute(
      "type",
      "submit"
    );
  });

  it("should apply the proper styles for a variant"),
    () => {
      const { getByRole } = render(
        <Button type="submit" variant="primary">
          Click me
        </Button>
      );
      expect(screen.getByRole("button", { name: "Click me" })).toHaveClass(
        "bg-cyan-800 text-white w-24 mt-2 cursor-pointer hover:bg-cyan-700 p-2 rounded"
      );
    };
});
