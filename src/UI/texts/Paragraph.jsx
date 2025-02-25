const Paragraph = ({ text }) => {
  return (
    <>
      <p className="text-xs text-left mt-4 mx-4 sm:mx-40 text-white lg:text-sm ">
        {text}
      </p>
    </>
  );
};

export default Paragraph;
