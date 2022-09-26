import Input from "./shared/Input";
import Heading from "./shared/Heading";

const Admin = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center text-center w-full">
          <Heading level={2} children="Login"></Heading>
        </div>

        <form className="flex justify-center mt-5">
          <Input id="name" label="Name" />
        </form>
      </div>
    </>
  );
};

export default Admin;
