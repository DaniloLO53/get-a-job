import { FC, InputHTMLAttributes } from "react";
import InputBar from "./InputBar";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { InputBarProps } from "@/utils/interfaces";

interface InputProps extends
  InputHTMLAttributes<HTMLInputElement>,
  Pick<InputBarProps, "isLoading" | "register" | "errors"> {}

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
