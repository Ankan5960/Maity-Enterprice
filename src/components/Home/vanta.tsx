import React, { useState, useEffect, useRef } from 'react'
import Globe from 'vanta/dist/vanta.globe.min'
import TextAnimation from './textAninmation'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    let height=window.innerHeight;
    let width=window.innerWidth;
    console.log(height,width);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(Globe({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: height,
                minWidth: width,
                scale: 1.00,
                scaleMobile: 1.00,
                size: 1.00,
                color: 0x4141ff,
                color2: 0xff3535,
                backgroundColor: 0xffffff
            }))
        }
        return () => {
            if (vantaEffect) setVantaEffect(null);
        }
    }, [vantaEffect])
    return (
        <div >
            <div ref={myRef} className='w-full z-0 h-full'>
                <TextAnimation />
            </div>
        </div>
    );
}
export default MyComponent;