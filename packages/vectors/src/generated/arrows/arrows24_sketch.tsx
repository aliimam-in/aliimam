
'use client';
import React from 'react';

export interface Arrows24SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows24Sketch = React.forwardRef<SVGSVGElement, Arrows24SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M401.055 89.6868C374.805 99.4368 338.305 107.687 306.555 110.937C275.805 114.187 275.555 115.187 298.805 138.187C323.055 162.187 324.805 156.437 283.055 193.437C191.055 275.188 97.3048 361.688 62.0548 397.188C35.0548 424.188 65.0553 422.435 82.5553 408.935C115.555 383.685 331.555 183.687 337.555 183.687C339.555 183.687 358.055 201.937 373.305 217.187C420.805 264.438 418.555 183.686 420.055 170.186C422.055 151.936 434.805 114.186 443.805 100.186C456.805 79.436 440.055 75.4368 401.055 89.6868Z" />
    </svg>
  )
);

Arrows24Sketch.displayName = "Arrows24Sketch";

export const Arrows24SketchMetadata = {
  id: "arrows24_sketch",
  baseId: "arrows24",
  variant: "sketch",
  name: "Arrows24",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows24Sketch;
