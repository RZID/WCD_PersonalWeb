// Deps
import classNames from "classnames";
import { FiArrowUpRight } from "react-icons/fi";

// Components
import Button from "../../components/Button";

// Types
import ExperienceProps from "./types";

const Experience = ({ name, fields }: ExperienceProps) => {
  return (
    <div
      className={classNames(
        "flex",
        "gap-x-5",
        "flex-row",
        "items-center",
        "justify-between"
      )}
    >
      <div className={classNames("flex", "flex-1", "gap-y-4", "flex-col")}>
        <h1 className={classNames("text-6xl", "text-slate-950")}>{name}</h1>
        <p className={classNames("text-gray-700")}>{fields.join(" - ")}</p>
      </div>
      <Button className={classNames("text-2xl")}>
        <FiArrowUpRight />
      </Button>
    </div>
  );
};

export default Experience;
