type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};
const sizeMap = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base",
};

const Heading = (props: HeadingProps) => {
  const Tag = `h${props.level}` as keyof JSX.IntrinsicElements;
  return (
    <>
      <Tag
        className={`font-bold font-mono ${
          sizeMap[props.level]
        } w-full flex justify-center mt-2`}
      >
        {props.children}
      </Tag>
    </>
  );
};

export default Heading;
