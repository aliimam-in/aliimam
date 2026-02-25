/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowUpLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowUpLeftFilled = React.forwardRef<SVGSVGElement, CircleArrowUpLeftFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 4.66h-6l-.117 .007l-.149 .029l-.105 .035l-.113 .054l-.111 .071a1.01 1.01 0 0 0 -.112 .097l-.08 .09l-.067 .096l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 6.075l.007 .117a1 1 0 0 0 .993 .883l.117 -.007a1 1 0 0 0 .883 -.993v-3.585l4.293 4.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4.292 -4.293h3.585l.117 -.007a1 1 0 0 0 -.117 -1.993z" />
    </svg>
  )
);
CircleArrowUpLeftFilled.displayName = "CircleArrowUpLeftFilled";
export const CircleArrowUpLeftFilledMetadata = { 
  id: "circle-arrow-up-left_filled", 
  baseId: "circle-arrow-up-left", 
  variant: "filled", 
  name: "Circle Arrow Up Left", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleArrowUpLeftFilled;
