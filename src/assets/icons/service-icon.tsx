import { IIconProp } from "./models/IIconProp";

const ServiceIcon: React.FC<IIconProp> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className={`${className ? className : "w-7 h-7 fill-white"} p-0 m-0`}
        >
            <path d="m643-273 44-41q7-7 7-15.5t-7-15.5L535-497q5-14 8-27t3-27q0-58-41-99t-99-41q-17 0-34 5t-33 14l88 87-54 51-86-85q-9 16-13.5 33t-4.5 35q0 57 40 96.5t97 39.5q14 0 27.5-2.5T461-425l151 152q6 6 15.5 6t15.5-6ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/>
        </svg>
    );
};
export default ServiceIcon;