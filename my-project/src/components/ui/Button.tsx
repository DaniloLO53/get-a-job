import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../lib/mergeClasses";
import { ThreeDots } from  'react-loader-spinner'

const buttonVariants = cva(
  `rounded px-xxxl py-xl flex items-center justify-center`,
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white font-medium",
        transparent: "bg-primary-400 opacity-40"
      },
      sizes: {
        default: "w-full",
        sm: "h-9 px-2",
        lg: "h-11 px-8",      
      },
    },
    defaultVariants: {
      variant: "default",
      sizes: "default",
    }
  }
);

export interface ButtonProps extends
  ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  isLoading?: boolean;
  register?: any;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  disabled,
  isLoading,
  sizes,
  variant,
  register,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(buttonVariants({ variant, sizes }), className)}
      {...props}
    >
      {children}
    </button>
  );
};



export default Button;
