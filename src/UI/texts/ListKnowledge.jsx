const ListKnowledge = ({ name, date, rol, description }) => {
  return (
    <>
      <div className="mb-14">
        <h1 className="text-teal-300 mx-8 text-base font-bold md:text-xl">
          {name}
        </h1>
        <h3 className="text-sm font-base m-auto text-white px-3 md:text-base">
          {date}
        </h3>
        <h3 className="text-sm font-medium px-4 text-white md:text-base">
          {rol}
        </h3>
        <div>-</div>
        <p className="text-xs px-4 sm:mx-32 md:mx-12 lg:mx-30 text-white md:text-sm text-left lg:text-center">
          {description}
        </p>
      </div>
    </>
  );
};

export default ListKnowledge;
