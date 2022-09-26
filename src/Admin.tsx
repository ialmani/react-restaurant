import Input from "./shared/Input";
import Heading from "./shared/Heading";
import Button from "./shared/Button";

const Admin = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center text-center w-full">
          <Heading level={2} children="Login"></Heading>
        </div>

        <form className="block text-center mt-5">
          <div>
            <Input type="text" id="name" label="Name" />
          </div>
          <div>
            <Input type="text" id="description" label="Description" />
          </div>
          <div>
            <Input type="number" id="price" label="Price" />
          </div>
          <Button variant="primary" type="submit" children="Save"></Button>
        </form>
      </div>
    </>
  );
};

export default Admin;
