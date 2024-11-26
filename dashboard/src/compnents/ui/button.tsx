import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button";
  className?: string | undefined;
  children: React.ReactNode | React.ReactNode[] | string;
  disabled?: boolean | undefined;
}

const Button: React.FC<IButton> = ({
  type,
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <div>
      <button
        {...props}
        type={type}
        disabled={disabled}
        className={`rounded-md bg-blue-600 text-white text-sm p-2 md:p-4 text-center w-full ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
