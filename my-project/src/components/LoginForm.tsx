import React, { InputHTMLAttributes, useState, FC, FormHTMLAttributes } from "react";
import { useForm, ValidationValueMessage } from "react-hook-form";
import InputBar from "./ui/InputBar";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Button from "./ui/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export interface FormProps extends
  FormHTMLAttributes<HTMLFormElement> {
  isLoading?: boolean;
}

const LoginForm: FC<FormProps> = ({ isLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [inputType, setInputType] = useState("password");
  const [disabled, setDisabled] = useState(true);

  interface ValidationErrorMessages {
    [key: string]: string;
  }
  
  const validationErrorMessages: ValidationErrorMessages = {
    default: "",
    atLeast6: "Password must contains at least 6 digits",
    required: "Field can not be empty",
    oneUpperCase: "Password must contains at least one uppercase letter",
    oneLowerCase: "Password must contains at least one lowercase letter",
    oneSpecialChar: "Password must contains at least one special character",
    oneNumeric: "Password must contains at least one numeric value",
  };

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  { console.log('Validations errors: ', errors) }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative w-full h-full
    flex flex-col items-center justify-center">
        <div className="w-[80%]">
          <InputBar
            type="email"
            placeholder="Email"
            className="p-md relative"
            inputType="email"
            register={register("email", {
              validate: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value),
              required: true
            })}
          />
          <div>
            <ReportProblemIcon className={`${!errors.email && "invisible"} text-red-800`} />
            &nbsp;
            <span className={`${!errors.email && "invisible"} text-red-800`}>Email is not valid</span>
          </div>
        </div>

        <div className="w-[80%]">
          <InputBar
            type="password"
            placeholder="Senha"
            className="p-md"
            inputType={inputType}
            register={register("password", {
              validate: {
                atLeast6: (value) => value.length >= 6,
                oneUpperCase: (value) => (/^(?=.*[A-Z]).{6,}$/).test(value),
                oneLowerCase: (value) => (/^(?=.*[a-z]).{6,}$/).test(value),
                oneSpecialChar: (value) => (/^(?=.*[a-z])(?=.*\W).{6,}$/).test(value),
                oneNumeric: (value) => (/^(?=.*\d).{6,}$/).test(value)
              },
              min: 6,
              required: true
            })}
          >
            <button
              type="button"
              className="bg-transparent border-none"
              onClick={() => setInputType((prevState) => (
                prevState === "text" ? "password" : "text"
              ))}
            >
              {inputType === "password" ? <VisibilityOffIcon
                className="absolute top-[15px] right-[15px]"
              /> : <VisibilityIcon
              className="absolute top-[15px] right-[15px] opacity-50"
              />}
            </button>
          </InputBar>

          <div>
            <ReportProblemIcon className={`${!errors.password && "invisible"} text-red-800`} />
            &nbsp;
            <span className={`${!errors.password && "invisible"} text-red-800`}>
              {
                errors?.password?.type
                ? validationErrorMessages[errors.password.type as string || "default"]
                : ""
              }
            </span>
          </div>
        </div>
        <div className="mt-5">
          <Button
            isLoading={isLoading}
            disabled={!!errors.password || !!errors.email}
            variant={(!!errors.password || !!errors.email) ? "transparent" : "default"
          }>
            Entrar
          </Button>
        </div>
      </form>
  )
}

export default LoginForm
