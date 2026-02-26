/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowDownLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowDownLeftFilled = React.forwardRef<SVGSVGElement, CircleArrowDownLeftFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-8 4.66a1 1 0 0 0 -1 1v6l.007 .117l.029 .149l.035 .105l.054 .113l.071 .111c.03 .04 .061 .077 .097 .112l.09 .08l.096 .067l.098 .052l.11 .044l.112 .03l.126 .017l6.075 .003l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.993 -.883h-3.586l4.293 -4.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-4.293 4.291v-3.584l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);
CircleArrowDownLeftFilled.displayName = "CircleArrowDownLeftFilled";
export const CircleArrowDownLeftFilledMetadata = { 
  id: "circle-arrow-down-left_filled", 
  baseId: "circle-arrow-down-left", 
  variant: "filled", 
  name: "Circle Arrow Down Left", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleArrowDownLeftFilled;
