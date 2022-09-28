type ErrorProps = {
  error: string;
};

const Error = ({ error }: ErrorProps) => {
  return (
    <p role="alert" className="text-red-600 font-bold mb-5">
      {error}
    </p>
  );
};

export default Error;
