import React from "react";
import { TypeAnimation } from "react-type-animation";

interface TextAnimationProps {
  name?: String ;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ name = "Default Text" }) => {
  // Split the name prop into an array of incremental strings for animation
  const animationSequence: (string | number)[] = [];
  
  for (let i = 0; i <= name.length; i++) {
    animationSequence.push(200); // Delay
    animationSequence.push(name.slice(0, i)); // Add part of the string
  }

  return (
    <div className={`flex justify-center items-center lg:text-md sm:text-sm pt-20 text-white`}>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={animationSequence}
        speed={75}
        style={{ fontSize: '4em' }}
        repeat={0}
      />
    </div>
  );
};

export default TextAnimation;
