/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareChevronsUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareChevronsUpFilled = React.forwardRef<SVGSVGElement, SquareChevronsUpFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-6.387 10.21a1 1 0 0 0 -1.32 .083l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-3 -3zm0 -5a1 1 0 0 0 -1.32 .083l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-3 -3z" />
    </svg>
  )
);
SquareChevronsUpFilled.displayName = "SquareChevronsUpFilled";
export const SquareChevronsUpFilledMetadata = { 
  id: "square-chevrons-up_filled", 
  baseId: "square-chevrons-up", 
  variant: "filled", 
  name: "Square Chevrons Up", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareChevronsUpFilled;
