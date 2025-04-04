// Deps
import React from "react";

export default interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isTextarea?: boolean;
}
