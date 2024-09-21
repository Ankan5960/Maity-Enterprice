import { IIconProp } from "./models/IIconProp";

const CloseIcon: React.FC<IIconProp> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className={`${className ? className : "w-7 h-7 fill-white"} p-0 m-0`}
        >
        <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
        </svg>);
};

export default CloseIcon;