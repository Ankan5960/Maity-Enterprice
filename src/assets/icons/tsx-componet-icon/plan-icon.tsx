import { IIconProp } from "../models/IIconProp";

const AboutIcon: React.FC<IIconProp> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className={`${className ? className : "w-7 h-7 fill-white"} p-0 m-0`}
        >
        <path d="M531-260h85v-3L453-438l1-3h5q53 0 91.5-30t46.5-80h39v-47h-40q-3-15-10-29t-16-26h66v-47H324v47h132q34 0 53.5 15t26.5 40H324v47h212q-5 26-25.5 42.5T453-492h-86v54l164 178ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/>
        </svg>);
};

export default AboutIcon;

