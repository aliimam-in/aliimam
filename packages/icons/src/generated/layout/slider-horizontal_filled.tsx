/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SliderHorizontalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SliderHorizontalFilled = React.forwardRef<SVGSVGElement, SliderHorizontalFilledProps>(
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
      <path d="M9 22H15C16.66 22 18 20.66 18 19V5C18 3.34 16.66 2 15 2H9C7.34 2 6 3.34 6 5V19C6 20.66 7.34 22 9 22Z" fill="currentColor"/>
<path d="M4.5 5.92996V18.07C4.5 18.39 4.21 18.62 3.9 18.56C2.42 18.29 2 17.43 2 15.33V8.66996C2 6.56996 2.42 5.70996 3.9 5.43996C4.21 5.37996 4.5 5.60996 4.5 5.92996Z" fill="currentColor"/>
<path d="M22 8.66996V15.33C22 17.43 21.58 18.29 20.1 18.56C19.79 18.62 19.5 18.38 19.5 18.07V5.92996C19.5 5.60996 19.79 5.37996 20.1 5.43996C21.58 5.70996 22 6.56996 22 8.66996Z" fill="currentColor"/>
    </svg>
  )
);
SliderHorizontalFilled.displayName = "SliderHorizontalFilled";
export const SliderHorizontalFilledMetadata = { 
  id: "slider-horizontal_filled", 
  baseId: "slider-horizontal", 
  variant: "filled", 
  name: "Slider Horizontal", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SliderHorizontalFilled;
