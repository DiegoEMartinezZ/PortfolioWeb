const Paragraph = ({ text }) => {
  return (
    <>
      <p className="text-xs text-left mt-4 mx-6 lg:mx-24 text-white lg:text-sm ">
        {text}
      </p>
    </>
  );
};

export default Paragraph;
