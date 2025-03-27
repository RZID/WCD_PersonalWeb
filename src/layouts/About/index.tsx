// Deps
import classNames from "classnames";

// Types
import AboutLayoutProps from "./types";

const AboutLayout = ({ title, children }: AboutLayoutProps) => {
  return (
    <div
      className={classNames(
        "flex",
        "px-10",
        "gap-x-5",
        "mx-auto",
        "gap-y-5",
        "flex-col",
        "lg:px-20",
        "container",
        "lg:flex-row"
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
