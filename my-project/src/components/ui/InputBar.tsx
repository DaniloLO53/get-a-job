import { cva, VariantProps } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";
import { cn } from "../../lib/mergeClasses";

const inputVariants = cva(
  `rounded`,
  {
    variants: {
      variant: {
        default: "bg-secondary-100",
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
  register: any;
  inputType?: string;
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
      <label htmlFor={props.name} />
      <input
        className={cn(inputVariants({ variant, sizes, className }))}
        { ...register }
        {...props}
        type={inputType}
      />
      {children}
    </div>
  );
};

export default InputBar;
