import { FC, InputHTMLAttributes } from "react";
import VisibilityEyeIcon, { InputType, SetInputTypeCallBack } from "../VisibilityEyeIcon";
import InputBar from "./InputBar";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export interface InputProps extends
  InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  register: any;
  inputType?: string;
  setInputType: any;
  errors: any;
  validationErrorMessages: any
  password: string
}

const InputBarConfirmPassword: FC<InputProps> = ({ ...props }) => {
  return (
    <div className="w-[80%]">
      <InputBar
        type="password"
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
          inputType={props.inputType as InputType}
          setInputType={props.setInputType as (cb: SetInputTypeCallBack) => InputType}
        />
      </InputBar>
      <div>
        <ReportProblemIcon className={`${!props.errors.confirmPassword && "invisible"} text-red-800`} />
        &nbsp;
        <span className={`${!props.errors.confirmPassword && "invisible"} text-red-800`}>
        {
          props.errors?.confirmPassword?.type
          ? props.validationErrorMessages[props.errors.confirmPassword.type as string || "default"]
          : ""
        }
        </span>
      </div>
    </div>
  );
};

export default InputBarConfirmPassword;
