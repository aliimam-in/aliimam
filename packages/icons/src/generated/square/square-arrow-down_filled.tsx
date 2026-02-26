/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowDownFilled = React.forwardRef<SVGSVGElement, SquareArrowDownFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4l.094 .083l.092 .064l.098 .052l.11 .044l.112 .03l.126 .017l.075 .003l.117 -.007l.149 -.029l.105 -.035l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.293 2.292v-5.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);
SquareArrowDownFilled.displayName = "SquareArrowDownFilled";
export const SquareArrowDownFilledMetadata = { 
  id: "square-arrow-down_filled", 
  baseId: "square-arrow-down", 
  variant: "filled", 
  name: "Square Arrow Down", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareArrowDownFilled;
