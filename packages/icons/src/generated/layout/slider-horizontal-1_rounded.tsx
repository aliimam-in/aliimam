/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SliderHorizontal1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SliderHorizontal1Rounded = React.forwardRef<SVGSVGElement, SliderHorizontal1RoundedProps>(
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
      <path d="M5 16.5V7.5C5 6.88 5.02 6.33 5.09 5.84C5.38 3.21 6.62 2.5 10 2.5H14C17.38 2.5 18.62 3.21 18.91 5.84C18.98 6.33 19 6.88 19 7.5V16.5C19 17.12 18.98 17.67 18.91 18.16C18.62 20.79 17.38 21.5 14 21.5H10C6.62 21.5 5.38 20.79 5.09 18.16C5.02 17.67 5 17.12 5 16.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 19.5V4.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19V4" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SliderHorizontal1Rounded.displayName = "SliderHorizontal1Rounded";
export const SliderHorizontal1RoundedMetadata = { 
  id: "slider-horizontal-1_rounded", 
  baseId: "slider-horizontal-1", 
  variant: "rounded", 
  name: "Slider Horizontal 1", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SliderHorizontal1Rounded;
