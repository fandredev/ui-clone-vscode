import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  classes?: string;
}

export default function Button({
  children,
  classes = "bg-background_buttons w-36 p-3 rounded-md",
}: ButtonProps) {
  return <button className={classes}>{children}</button>;
}
