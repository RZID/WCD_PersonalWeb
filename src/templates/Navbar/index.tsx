import classNames from "classnames";

const Navbar = () => {
  return (
    <div
      className={classNames(
        "lg:px-20",
        "py-7",
        "absolute",
        "top-0",
        "z-10",
        "w-full"
      )}
    >
      <div
        className={classNames(
          "flex",
          "mx-auto",
          "flex-row",
          "container",
          "justify-between"
        )}
      >
        <h1 className={classNames("text-lg")}>@Ramadhanu</h1>
        <div className={classNames("flex", "flex-row", "gap-x-10", "text-lg")}>
          <h3>About</h3>
          <h3>Work</h3>
          <h3>Contact</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
