/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SliderVertical1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SliderVertical1Filled = React.forwardRef<SVGSVGElement, SliderVertical1FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M18.94 3.5H5.06C4.65 3.5 4.31 3.16 4.31 2.75C4.31 2.34 4.65 2 5.06 2H18.94C19.35 2 19.69 2.34 19.69 2.75C19.69 3.16 19.35 3.5 18.94 3.5Z" fill="currentColor"/>
<path d="M18.94 22H5.06C4.65 22 4.31 21.66 4.31 21.25C4.31 20.84 4.65 20.5 5.06 20.5H18.94C19.35 20.5 19.69 20.84 19.69 21.25C19.69 21.66 19.35 22 18.94 22Z" fill="currentColor"/>
<path d="M2.75 8V16C2.75 17.66 4.09 19 5.75 19H18.25C19.91 19 21.25 17.66 21.25 16V8C21.25 6.34 19.91 5 18.25 5H5.75C4.09 5 2.75 6.34 2.75 8Z" fill="currentColor"/>
    </svg>
  )
);
SliderVertical1Filled.displayName = "SliderVertical1Filled";
export const SliderVertical1FilledMetadata = { 
  id: "slider-vertical-1_filled", 
  baseId: "slider-vertical-1", 
  variant: "filled", 
  name: "Slider Vertical 1", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SliderVertical1Filled;
