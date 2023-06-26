import { FC, InputHTMLAttributes } from "react";
import VisibilityEyeIcon from "../VisibilityEyeIcon";
import InputBar from "./InputBar";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { InputBarProps } from "@/utils/interfaces";

export interface InputProps extends
  InputHTMLAttributes<HTMLInputElement>, Omit<InputBarProps, "password"> {}

const InputBarPassword: FC<InputProps> = ({ ...props }) => {
  return (
    <div className="w-[80%]">
      <InputBar
        type="password"
        placeholder="Senha"
        className="p-md"
        variant={props.errors.password ? "error" : "default"}
        inputType={props.inputType}
       register={props.register("password", {
          validate: {
            atLeast6: (value: string) => value.length >= 6,
            oneUpperCase: (value: string) => (/^(?=.*[A-Z]).{6,}$/).test(value),
            oneLowerCase: (value: string) => (/^(?=.*[a-z]).{6,}$/).test(value),
            oneSpecialChar: (value: string) => (/^(?=.*[a-z])(?=.*\W).{6,}$/).test(value),
            oneNumeric: (value: string) => (/^(?=.*\d).{6,}$/).test(value)
          },
          min: 6,
          required: true
        })}
      >
        <VisibilityEyeIcon
          inputType={props.inputType}
          setInputType={props.setInputType}
        />
      </InputBar>

      <div>
        <ReportProblemIcon
          className={`${!props.errors.password && "invisible"} text-red-800`}
        />
        &nbsp;
        <span className={`${!props.errors.password && "invisible"} text-red-800`}>
          {
            props.errors?.password?.type
            ? props.validationErrorMessages[props.errors.password.type || "default"]
            : ""
          }
        </span>
      </div>
    </div>
  );
};

export default InputBarPassword;
