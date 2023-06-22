import { FieldValues, UseFormRegister } from "react-hook-form";

export type InputType = "password" | "text" | "email";
export type RegisterType = "password" | "confirmPassword" | "email";
export type SetInputTypeCallBack = (prevState: InputType) => InputType;

export interface InputBarProps {
  isLoading: boolean;
  register: UseFormRegister<FieldValues>
  inputType: InputType;
  setInputType: React.Dispatch<React.SetStateAction<InputType>>
  errors: any;
  validationErrorMessages: any
  password: string
}