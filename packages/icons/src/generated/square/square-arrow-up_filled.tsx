/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowUpFilled = React.forwardRef<SVGSVGElement, SquareArrowUpFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5l-.09 .004l-.058 .007l-.118 .025l-.105 .035l-.113 .054l-.111 .071a1.008 1.008 0 0 0 -.112 .097l-4 4l-.083 .094a1 1 0 0 0 .083 1.32l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292v5.585l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.104 -.074l-.098 -.052l-.11 -.044l-.112 -.03l-.126 -.017l-.075 -.003z" />
    </svg>
  )
);
SquareArrowUpFilled.displayName = "SquareArrowUpFilled";
export const SquareArrowUpFilledMetadata = { 
  id: "square-arrow-up_filled", 
  baseId: "square-arrow-up", 
  variant: "filled", 
  name: "Square Arrow Up", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareArrowUpFilled;
