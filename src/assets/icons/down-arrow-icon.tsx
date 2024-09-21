import { IIconProp } from "./models/IIconProp";

const DownArrowIcon: React.FC<IIconProp> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className={`${className ? className : "w-7 h-7 fill-white"} p-0 m-0`}
        >
        <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/>
        </svg>);
};

export default DownArrowIcon;