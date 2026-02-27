/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SliderRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SliderRounded = React.forwardRef<SVGSVGElement, SliderRoundedProps>(
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
      <path d="M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 16.01H19"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 4V20"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 4V20"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SliderRounded.displayName = "SliderRounded";
export const SliderRoundedMetadata = { 
  id: "slider_rounded", 
  baseId: "slider", 
  variant: "rounded", 
  name: "Slider", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SliderRounded;
