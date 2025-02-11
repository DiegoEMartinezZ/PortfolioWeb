const ListEducation = ({ name, time, rol }) => {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-teal-300  text-base font-bold md:text-xl">
          {name}
        </h1>
        <h3 className="text-sm font-base m-auto text-white px-3 md:text-base">
          {time}
        </h3>
        <h3 className="text-sm font-medium px-4 text-white md:text-base">
          {rol}
        </h3>
      </div>
    </>
  );
};

export default ListEducation;
