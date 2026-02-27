/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SliderHorizontal1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SliderHorizontal1Filled = React.forwardRef<SVGSVGElement, SliderHorizontal1FilledProps>(
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
      <path d="M3.5 5.06006V18.9401C3.5 19.3501 3.16 19.6901 2.75 19.6901C2.34 19.6901 2 19.3501 2 18.9401V5.06006C2 4.65006 2.34 4.31006 2.75 4.31006C3.16 4.31006 3.5 4.65006 3.5 5.06006Z" fill="currentColor"/>
<path d="M22 5.06006V18.9401C22 19.3501 21.66 19.6901 21.25 19.6901C20.84 19.6901 20.5 19.3501 20.5 18.9401V5.06006C20.5 4.65006 20.84 4.31006 21.25 4.31006C21.66 4.31006 22 4.65006 22 5.06006Z" fill="currentColor"/>
<path d="M8 21.25H16C17.66 21.25 19 19.91 19 18.25V5.75C19 4.09 17.66 2.75 16 2.75H8C6.34 2.75 5 4.09 5 5.75V18.25C5 19.91 6.34 21.25 8 21.25Z" fill="currentColor"/>
    </svg>
  )
);
SliderHorizontal1Filled.displayName = "SliderHorizontal1Filled";
export const SliderHorizontal1FilledMetadata = { 
  id: "slider-horizontal-1_filled", 
  baseId: "slider-horizontal-1", 
  variant: "filled", 
  name: "Slider Horizontal 1", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SliderHorizontal1Filled;
