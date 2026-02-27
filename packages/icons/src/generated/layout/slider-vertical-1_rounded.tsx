/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SliderVertical1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SliderVertical1Rounded = React.forwardRef<SVGSVGElement, SliderVertical1RoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M7.5 5H16.5C17.12 5 17.67 5.02 18.16 5.09C20.79 5.38 21.5 6.62 21.5 10V14C21.5 17.38 20.79 18.62 18.16 18.91C17.67 18.98 17.12 19 16.5 19H7.5C6.88 19 6.33 18.98 5.84 18.91C3.21 18.62 2.5 17.38 2.5 14V10C2.5 6.62 3.21 5.38 5.84 5.09C6.33 5.02 6.88 5 7.5 5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 2H19.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 22H20" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SliderVertical1Rounded.displayName = "SliderVertical1Rounded";
export const SliderVertical1RoundedMetadata = { 
  id: "slider-vertical-1_rounded", 
  baseId: "slider-vertical-1", 
  variant: "rounded", 
  name: "Slider Vertical 1", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SliderVertical1Rounded;
