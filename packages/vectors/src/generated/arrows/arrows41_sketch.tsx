
'use client';
import React from 'react';

export interface Arrows41SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows41Sketch = React.forwardRef<SVGSVGElement, Arrows41SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M414.836 38.8729C397.121 44.1586 354.123 62.158 290.266 69.0152C280.551 70.0152 276.979 72.4443 279.836 76.0158C284.979 82.1586 297.55 82.3015 333.407 76.0158C367.55 70.1586 351.979 72.8723 320.55 94.0152C160.121 201.73 181.837 242.015 170.837 262.444L159.551 270.301C101.837 310.73 37.9791 436.301 62.5505 461.015C70.8363 469.301 73.6937 465.73 82.2651 435.301C98.8365 377.444 128.265 325.444 162.55 293.301C170.979 285.444 170.409 285.301 173.837 297.73C187.837 350.015 298.123 351.587 323.551 299.73C345.837 254.301 280.407 218.587 215.55 240.73C199.407 246.301 200.266 246.872 205.98 233.015C236.694 158.301 338.693 106.873 373.979 82.8726C386.121 74.5869 386.123 74.73 372.266 96.0158C347.123 134.444 345.121 139.444 352.693 143.301C363.693 149.158 370.551 143.872 387.837 116.158C408.694 82.8723 419.123 68.5866 433.123 54.7295C454.694 33.4438 433.979 33.1586 414.836 38.8729ZM287.266 251.73C312.123 269.015 304.694 303.73 273.123 318.587C231.551 338.015 198.123 321.158 197.837 280.301C197.694 264.444 212.837 260.301 214.409 259.158C241.98 245.444 273.694 242.158 287.266 251.73Z" />
    </svg>
  )
);

Arrows41Sketch.displayName = "Arrows41Sketch";

export const Arrows41SketchMetadata = {
  id: "arrows41_sketch",
  baseId: "arrows41",
  variant: "sketch",
  name: "Arrows41",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows41Sketch;
