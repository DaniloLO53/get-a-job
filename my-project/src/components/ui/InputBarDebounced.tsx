import { InputType, RegisterType } from "@/utils/interfaces";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "../../lib/mergeClasses";
import { DebounceInput } from 'react-debounce-input';

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
        default: "w-full h-full",
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

export interface InputBarDebouncedProps extends
  HTMLAttributes<HTMLElement>,
  VariantProps<typeof inputVariants> {
  isLoading?: boolean;
  value?: any;
  valueHandler?: any;
  search?: any;
  setSearch?: any;
  debounceTimeout?: number;
}

const InputBarDebounced: FC<any> = ({
  className,
  children,
  sizes,
  variant,
  ...props
}) => {
  // console.log('debounceTimeout: ', props.debounceTimeout)
  return (
    <div className="p-sm w-full relative">
      <DebounceInput
        className={cn(inputVariants({ variant, sizes, className }))}
        {...props}
        value={props.search}
        onChange={(event) => {
          props.valueHandler(event);
          props.setSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default InputBarDebounced;
