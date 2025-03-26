import classNames from "classnames";
import ProjectProps from "./types";

const Project = ({ project }: ProjectProps) => {
  return (
    <div className={classNames("bg-slate-300", "py-12", "px-14")}>
      <img
        src={project}
        alt="project"
        className={classNames("w-[348px]", "h-[194px]", "object-cover")}
      />
    </div>
  );
};

export default Project;
