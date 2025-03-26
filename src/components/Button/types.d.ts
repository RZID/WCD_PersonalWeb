import React, { JSX } from "react";

export default interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
}
