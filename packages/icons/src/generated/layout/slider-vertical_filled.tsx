/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SliderVerticalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SliderVerticalFilled = React.forwardRef<SVGSVGElement, SliderVerticalFilledProps>(
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
      <path d="M22 15V9C22 7.34 20.66 6 19 6H5C3.34 6 2 7.34 2 9V15C2 16.66 3.34 18 5 18H19C20.66 18 22 16.66 22 15Z" fill="currentColor"/>
<path d="M5.93003 19.5H18.07C18.39 19.5 18.62 19.79 18.56 20.1C18.29 21.58 17.42 22 15.33 22H8.67003C6.57003 22 5.71003 21.58 5.44003 20.1C5.38003 19.79 5.61003 19.5 5.93003 19.5Z" fill="currentColor"/>
<path d="M8.67003 2H15.33C17.43 2 18.29 2.42 18.56 3.9C18.62 4.21 18.38 4.5 18.07 4.5H5.93003C5.61003 4.5 5.38003 4.21 5.44003 3.9C5.71003 2.42 6.57003 2 8.67003 2Z" fill="currentColor"/>
    </svg>
  )
);
SliderVerticalFilled.displayName = "SliderVerticalFilled";
export const SliderVerticalFilledMetadata = { 
  id: "slider-vertical_filled", 
  baseId: "slider-vertical", 
  variant: "filled", 
  name: "Slider Vertical", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SliderVerticalFilled;
