import React from "react";
import { TypeAnimation } from "react-type-animation";

interface TextAnimationProps {
  name?: String ;
  color?: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ name = "Default Text" , color='text-white' }) => {
  // Split the name prop into an array of incremental strings for animation
  const animationSequence: (string | number)[] = [];
  
  for (let i = 0; i <= name.length; i++) {
    animationSequence.push(200); // Delay
    animationSequence.push(name.slice(0, i)); // Add part of the string
  }

  return (
    <div className={`flex justify-center items-center text-xs  lg:text-md sm:text-xs ${color}`}>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={animationSequence}
        speed={75}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-semibold"
        repeat={0}
      />
    </div>
  );
};

export default TextAnimation;
