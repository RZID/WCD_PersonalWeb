import classNames from "classnames";
import AboutLayoutProps from "./types";

const AboutLayout = ({ title, children }: AboutLayoutProps) => {
  return (
    <div
      className={classNames(
        "flex",
        "gap-x-5",
        "mx-auto",
        "flex-row",
        "lg:px-20",
        "container"
      )}
    >
      <h1 className={classNames("flex-1", "font-medium", "text-4xl")}>
        {title}
      </h1>
      <div className={classNames("flex-[2]")}>{children}</div>
    </div>
  );
};

export default AboutLayout;
