import { ButtonHTMLAttributes, FC } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputType } from "@/utils/interfaces";

export interface ButtonProps extends
  ButtonHTMLAttributes<HTMLButtonElement> {
  setInputType: React.Dispatch<React.SetStateAction<InputType>>
  inputType: InputType;
}

const VisibilityEyeIcon: FC<ButtonProps> = ({ ...props }) => {
  const switchIcon = (type: InputType) => (
    type === "password"
    ? <VisibilityOffIcon className="absolute top-[15px] right-[15px]"/>
    : <VisibilityIcon className="absolute top-[15px] right-[15px] opacity-50" />
  );

  return (
    <button
      type="button"
      className="bg-transparent border-none"
      onClick={() => props.setInputType((prevState) => (
        prevState === "text" ? "password" : "text"
      ))}
    >
      { switchIcon(props.inputType) }
    </button>
  );
};

export default VisibilityEyeIcon;
