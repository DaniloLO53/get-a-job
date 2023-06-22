import { cva, VariantProps } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";
import InputBar from "./InputBar";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export interface InputProps extends
  InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  register: any;
  errors: any;
}

const InputBarEmail: FC<InputProps> = ({ ...props }) => {
  return (
    <div className="w-[80%]">
      <InputBar
        type="email"
        placeholder="Email"
        className="p-md relative"
        inputType="email"
        register={props.register("email", {
        validate: (value: string) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value),
          required: true
        })}
      />
      <div>
        <ReportProblemIcon className={`${!props.errors.email && "invisible"} text-red-800`} />
        &nbsp;
        <span className={`${!props.errors.email && "invisible"} text-red-800`}>Email is not valid</span>
      </div>
    </div>
  );
};

export default InputBarEmail;
