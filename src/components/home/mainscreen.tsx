import React from "react";
import {TypeAnimation} from "react-type-animation";

const TitleScreen = () => {

    return (
        <div className="flex justify-center items-center">
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    200,
                    'M',
                    200,
                    'Ma',
                    200,
                    'Mai',
                    200,
                    'Maity',
                    200,
                    'Maity ',
                    200,
                    'Maity En',
                    200,
                    'Maity Ente',
                    200,
                    'Maity Enterpr',
                    200,
                    'Maity Enterprice',
                    1000,
                ]}
                speed={75}
                style={{ fontSize: '4em' }}
                repeat={Infinity}
            />
        </div>
    );
}

export default TitleScreen;