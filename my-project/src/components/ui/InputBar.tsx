import { InputType, RegisterType } from "@/utils/interfaces";
import { cva, VariantProps } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "../../lib/mergeClasses";

const inputVariants = cva(
  `rounded`,
  {
    variants: {
      variant: {
        default: "border-solid border-[1px] border-gray-500",
        error: "border-solid border-[1px] border-red-500",
        transparent: "bg-transparent"
      },
      sizes: {
        default: "w-full",
        sm: "h-9 px-2",
        lg: "h-11 px-8"
      },
    },
    defaultVariants: {
      variant: "default",
      sizes: "default",
    }
  }
);

export interface InputProps extends
  InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  isLoading?: boolean;
  register: UseFormRegisterReturn<RegisterType>;
  inputType: InputType;
  labelText?: string;
}

const InputBar: FC<InputProps> = ({
  className,
  children,
  sizes,
  variant,
  register,
  inputType,
  ...props
}) => {
  return (
    <div className="p-sm w-full relative">
      <input
        className={
          cn(inputVariants({ variant, sizes, className }))}
        { ...register }
        {...props}
        type={inputType}
      />
      <label
        htmlFor={props.name}
        className="absolute p-[2px] bg-white top-[-4px] left-[25px] text-xs"
      >
        { props.labelText }
      </label>
      {children}
    </div>
  );
};

export default InputBar;
