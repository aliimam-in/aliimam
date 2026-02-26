
'use client';
import React from 'react';

export interface Arrows6SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows6Sketch = React.forwardRef<SVGSVGElement, Arrows6SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M85.019 128.897C87.019 186.646 88.7688 221.897 118.519 221.897C137.269 221.897 139.52 218.146 134.27 197.646C130.27 182.147 127.519 153.646 125.769 131.146C122.769 91.8962 84.019 98.1465 85.019 128.897ZM247.519 194.397C243.519 196.897 243.019 211.396 246.019 245.896L247.769 266.147L222.519 267.647C201.769 268.897 173.019 268.648 154.769 253.148C133.519 235.397 108.769 251.398 127.769 270.648C154.269 297.898 213.269 311.147 248.269 297.647C251.268 296.647 252.77 297.648 253.52 301.898C255.27 310.648 260.27 347.898 262.27 367.648C265.02 396.898 293.52 406.895 303.77 382.145C319.52 344.395 360.02 298.897 395.27 279.147C421.77 264.397 421.02 262.147 388.02 252.647C353.27 242.646 336.27 235.146 309.02 217.146C275.02 195.646 256.77 188.647 247.519 194.397Z" />
    </svg>
  )
);

Arrows6Sketch.displayName = "Arrows6Sketch";

export const Arrows6SketchMetadata = {
  id: "arrows6_sketch",
  baseId: "arrows6",
  variant: "sketch",
  name: "Arrows6",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows6Sketch;
