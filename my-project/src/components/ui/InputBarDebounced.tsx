import { InputType, RegisterType } from "@/utils/interfaces";
import { cva, VariantProps } from "class-variance-authority";
import { FC, InputHTMLAttributes, useEffect } from "react";
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
  InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  isLoading?: boolean;
  register?: UseFormRegisterReturn<RegisterType>;
  inputType: InputType;
  value?: any;
  valueHandler?: any;
  search?: any;
  setSearch?: any;
  debounceTimeout?: number;
  setSearchBarFocused: any;
  inputRef: any;
  clickRef: any;
}

const InputBarDebounced: FC<InputBarDebouncedProps> = ({
  className,
  children,
  sizes,
  variant,
  register,
  inputType,
  setSearch,
  valueHandler,
  setSearchBarFocused,
  inputRef,
  clickRef,
  ...props
}) => {
  function onBlurHandler({ relatedTarget: rt, target: t }: any) {
    (rt && rt.id === "nextButton") ? t.focus() : setSearchBarFocused(false);
  }

  return (
    <div className="p-sm w-full relative">
      <DebounceInput
        inputRef={inputRef}
        onFocus={() => setSearchBarFocused(true)}
        onBlur={onBlurHandler}
        className={cn(inputVariants({ variant, sizes, className }))}
        { ...register }
        {...props}
        type={inputType}
        value={props.search}
        onChange={(event) => {
          valueHandler(event);
          setSearch(event.target.value);
        }}
      />
      <label
        htmlFor={props.name}
        className="absolute p-[2px] bg-white top-[-4px] left-[25px] text-xs"
      />
      {children}
    </div>
  );
};

export default InputBarDebounced;
