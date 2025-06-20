'use client';

import { TypeAnimation } from 'react-type-animation';

export default function HeroTitle() {
  return (
    <TypeAnimation
      sequence={[
        "Hi, I'm Nicholas Jones",
        5000,
        "",
        500                     
      ]}
      speed={30}
      className="md:text-7xl font-bold"
      wrapper="h1"
      repeat={Infinity}
    />
  );
}