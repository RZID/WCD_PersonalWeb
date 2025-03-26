// Deps
import classNames from "classnames";

// Types
import RunningComponentProps from "./types";

const RunningComponent = ({ children }: RunningComponentProps) => {
  return (
    <div className={classNames("overflow-hidden", "whitespace-nowrap")}>
      <div className={classNames("marquee", "min-w-full")}>{children}</div>
    </div>
  );
};

export default RunningComponent;
