import { IIconProp } from "../models/IIconProp";

const MyLocationicon: React.FC<IIconProp> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className={`${className ? className : "w-7 h-7 fill-white"} p-0 m-0`}
        >
        <path d="M444-22v-82q-139-15-232.5-108T103-444H21v-73h82q15-139 108.5-232.5T444-859v-82h73v82q138 16 231.5 109.5T858-517h82v73h-82q-16 139-109.5 232T517-104v82h-73Zm37-154q126 0 215.5-89T786-481q0-127-89.5-216.5T481-787q-127 0-216.5 89.5T175-481q0 127 89.5 216T481-176Zm0-141q-69 0-116.5-47.5T317-481q0-69 47.5-116.5T481-645q68 0 116 47.5T645-481q0 69-48 116.5T481-317Z"/>        
        </svg>);
};

export default MyLocationicon;