import { FC, InputHTMLAttributes } from "react";
import VisibilityEyeIcon from "../VisibilityEyeIcon";
import InputBar from "./InputBar";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { InputBarProps } from "@/utils/interfaces";
import InputBarWithValidation from "./InputBarWithValidation";

export interface InputProps extends
  InputHTMLAttributes<HTMLInputElement>, InputBarProps {}

const InputBarConfirmPassword: FC<InputProps> = ({ ...props }) => {
  return (
    <div className="w-[80%]">
      <InputBarWithValidation
        type="password"
        variant={props.errors.confirmPassword ? "error" : "default"}
        placeholder="Confirme a senha"
        className="p-md"
        inputType={props.inputType}
        register={props.register("confirmPassword", {
          validate: {
            mustMatch: (value: string) => value === props.password,
          },
          min: 6,
          required: true
        })}
      >
        <VisibilityEyeIcon
          inputType={props.inputType}
          setInputType={props.setInputType}
        />
      </InputBarWithValidation>
      <div>
        <ReportProblemIcon className={`${!props.errors.confirmPassword && "invisible"} text-red-800`} />
        &nbsp;
        <span className={`${!props.errors.confirmPassword && "invisible"} text-red-800`}>
        {
          props.errors?.confirmPassword?.type
          ? props.validationErrorMessages[props.errors.confirmPassword.type || "default"]
          : ""
        }
        </span>
      </div>
    </div>
  );
};

export default InputBarConfirmPassword;
