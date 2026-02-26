/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowUpRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowUpRightFilled = React.forwardRef<SVGSVGElement, CircleArrowUpRightFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 4.66h-6l-.117 .007a1 1 0 0 0 -.883 .993l.007 .117a1 1 0 0 0 .993 .883h3.584l-4.291 4.293l-.083 .094a1 1 0 0 0 1.497 1.32l4.293 -4.293v3.586l.007 .117a1 1 0 0 0 1.993 -.117v-6l-.007 -.117l-.029 -.149l-.035 -.105l-.054 -.113l-.071 -.111a1.01 1.01 0 0 0 -.097 -.112l-.09 -.08l-.096 -.067l-.098 -.052l-.11 -.044l-.112 -.03l-.126 -.017l-.075 -.003z" />
    </svg>
  )
);
CircleArrowUpRightFilled.displayName = "CircleArrowUpRightFilled";
export const CircleArrowUpRightFilledMetadata = { 
  id: "circle-arrow-up-right_filled", 
  baseId: "circle-arrow-up-right", 
  variant: "filled", 
  name: "Circle Arrow Up Right", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleArrowUpRightFilled;
